import React from 'react';
import PropTypes from 'prop-types';
import PostCardList from '../PostCardList';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Layout from '../layout';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin: ${(props) => props.theme.page.margin};
  padding: ${(props) => props.theme.page.padding};
`;

const Header = styled.header`
  font-family: ${(props) => props.theme.page.header.fontFamily};
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  margin: ${(props) => props.theme.page.header.margin};
`;

const H1 = styled.h1`
  font-size: ${(props) => props.theme.page.header.fontSize};
  padding: 0;
  span {
    border-bottom: 1px solid rgba(0, 0, 0, 0.44);
    display: inline-block;
    padding-bottom: ${({ theme }) => theme.scale(3.5)};
    margin-bottom: -1px;
  }
`;

const Blog = (props) => {
  const { author } = props.data.site.siteMetadata;
  return (
    <Layout location={props.location}>
      <Wrapper>
        <FormattedMessage id="posts">
          {(txt) => (
            <Header>
              <Helmet title={txt} meta={[{ name: 'description', content: txt }]} />
              <H1>
                <span>{txt}</span>
              </H1>
            </Header>
          )}
        </FormattedMessage>
        <PostCardList posts={props.data.allMarkdownRemark.edges.map((p) => p.node)} author={author} imageOnTop />
      </Wrapper>
    </Layout>
  );
};

Blog.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default Blog;
