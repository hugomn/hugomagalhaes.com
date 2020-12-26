import React from 'react';
import Blog from '../../components/pages/Blog';
import { graphql } from 'gatsby';

export default (props) => <Blog {...props} />;

export const pageQuery = graphql`
  query BlogEnQuery {
    site {
      siteMetadata {
        author {
          name
          homeCity
          email
          defaultLink
        }
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } }, fields: { langKey: { regex: "/(en|any)/" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
            date
            image {
              childImageSharp {
                sizes(maxWidth: 750) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          fields {
            slug
            langKey
            tagSlugs {
              tag
              link
            }
          }
          excerpt
        }
      }
    }
  }
`;
