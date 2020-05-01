import React from 'react';
import PropTypes from 'prop-types';
import { getAuthor } from '../../data/authors';
import { getStructuredDataForAuthor } from '../../structuredData';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import Layout from '../layout';

const Wrapper = styled.article`
  margin: ${props => props.theme.page.margin};
  padding: ${props => props.theme.page.padding};
  max-width: ${props => props.theme.page.maxWidth};
`;

const Header = styled.header`
  font-family: ${props => props.theme.page.header.fontFamily};
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  margin: ${props => props.theme.page.header.margin};
`;

const Content = styled.section`
  font-family: ${props => props.theme.page.content.fontFamily};
  p {
    margin: ${props => props.theme.page.content.p.margin};
    padding: ${props => props.theme.page.content.p.padding};
    font-size: ${props => props.theme.p.fontSize};
    line-height: ${props => props.theme.p.lineHeight};
  }
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

const Page = (props) => {
  const author = getAuthor('hugomn');
  author.description = props.i18n.description;
  const structuredData = getStructuredDataForAuthor(author);

  return (
    <Layout location={props.location}>
      <Wrapper>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
        <FormattedMessage id={props.i18n.titleId}>
          {(title) => (
            <Header>
              <Helmet
                title={title}
                meta={[{ name: 'description', content: props.i18n.description }]}
              />
              <H1>
                <span>{title}</span>
              </H1>
            </Header>
          )}
        </FormattedMessage>
        <Content>
          {props.i18n.content}
        </Content>
      </Wrapper>
    </Layout>
  );
};

Page.propTypes = {
  i18n: PropTypes.shape({
    titleId: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired
};

export default Page;
