import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../components/Link';
import kebabCase from 'lodash/kebabCase';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import Layout from '../../components/layout';

const Wrapper = styled.section`
  margin: ${props => props.theme.page.margin};
  padding: ${props => props.theme.page.padding};
`;

const Nav = styled.nav`
  margin-top: ${({ theme }) => theme.scale(-1)};
  margin-bottom: ${({ theme }) => theme.scale(6)};
  column-count: 2;

  @media (min-width: 450px) {
    column-count: 3;
  }

  @media (min-width: 650px) {
    column-count: 4;
  }
`;

const Li = styled.li`
  font-size: ${({ theme }) => theme.scale(1)};
  padding: ${({ theme }) => theme.scale(-1)} 0;
`;

const Header = styled.header`
  font-family: ${props => props.theme.page.header.fontFamily};
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  margin: ${props => props.theme.page.header.margin};
`;

const H1 = styled.h1`
  font-size: ${props => props.theme.page.header.fontSize};
  padding: 0;
  span {
    border-bottom: 1px solid rgba(0, 0, 0, 0.44);
    display: inline-block;
    padding-bottom: ${({ theme }) => theme.scale(3.5)};
    margin-bottom: -1px;
  }
`;

const Tags = props => {
  const allTags = props.data.allMarkdownRemark.group;

  return (
    <Layout location={props.location}>
      <Wrapper>
        <FormattedMessage id="tags">
          {txt => (
            <Header>
              <Helmet title={txt} meta={[{ name: 'description', content: txt }]} />
              <H1>
                <span>{txt}</span>
              </H1>
            </Header>
          )}
        </FormattedMessage>
        <Nav>
          <ul>
            {allTags.map(tag => (
              <Li key={tag.fieldValue}>
                <Link
                  style={{
                    textDecoration: 'none'
                  }}
                  to={`/tags/${kebabCase(tag.fieldValue)}/`}
                >
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </Li>
            ))}
          </ul>
        </Nav>
      </Wrapper>
    </Layout>
  );
};

Tags.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object.isRequired
};

export default Tags;
