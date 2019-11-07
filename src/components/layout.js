import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FixedContainer from '../components/FixedContainer';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { StaticQuery, graphql, withPrefix } from 'gatsby';
import { IntlProvider, FormattedMessage } from 'react-intl';
import en from '../data/messages/en';
import pt from '../data/messages/pt';
import theme from '../themes/theme';
import { getLangs, getUrlForLang, getCurrentLangKey, isHomePage } from 'ptz-i18n';
import Helmet from 'react-helmet';
import Welcome from './Welcome';

const messages = { en, pt };

const Layout = props => {
  const { children, location } = props;
  const url = location.pathname;
  const { langs, defaultLangKey } = props.data.site.siteMetadata.languages;
  const isHome = isHomePage(url, false, langs);
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey !== 'en' ? langKey : ''}`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map(item => ({
    ...item,
    link: item.link.replace(`/${defaultLangKey}/`, '/')
  }));
  const { menu, author, sourceCodeLink, siteUrl, description } = props.data.site.siteMetadata;

  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale={langKey} messages={messages[langKey]}>
        <BodyContainer>
          <FormattedMessage id="title">
            {txt => (
              <Helmet defaultTitle={txt} titleTemplate={`%s | ${txt}`}>
                <meta name="author" content={author.name} />
                <meta name="description" content={description} />
                <meta property="og:title" content={txt} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${siteUrl}${withPrefix(url)}`} />
                <meta property="og:image" content={`${siteUrl}${withPrefix('/meta.jpg')}`} />
                <meta property="fb:app_id" content="2528326990770132" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={txt} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:site" content={`@${author.twitter}`} />
                <meta name="twitter:author" content={`@${author.twitter}`} />
                <meta name="twitter:image" content={`${siteUrl}${withPrefix('/meta.jpg')}`} />
              </Helmet>
            )}
          </FormattedMessage>
          <Header isHome={isHome} homeLink={homeLink} langs={langsMenu} url={url} menu={menu} />
          {(url === '/' || url === '/pt/') && <Welcome author={author} langKey={langKey} />}
          {/* {isHome && <Welcome author={author} langKey={langKey} />} */}
          <Container>
            <main>{children}</main>
          </Container>
          <Footer author={author} langs={langsMenu} sourceCodeLink={sourceCodeLink} />
          <GlobalStyle />
        </BodyContainer>
      </IntlProvider>
    </ThemeProvider>
  );
};

const BodyContainer = styled.div`
  font-family: ${props => props.theme.fonts.SansSerif};
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.bg};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  min-height: 100%;
  overflow-x: hidden;
  font-feature-settings: 'calt' 1, 'clig' 1, 'dlig' 1, 'kern' 1, 'liga' 1, 'salt' 1;
  padding-top: ${props => props.theme.header.height}px;
`;

const Container = styled(FixedContainer)`
  padding: ${props => props.theme.padding};
  margin: ${props => props.theme.margin};
`;

const GlobalStyle = createGlobalStyle`
  body {
    overscroll-behavior-y: none;
  }
  a {
    color: ${props => props.theme.a.color};
    text-decoration: ${props => props.theme.a.textDecoration};
    transition: all 0.2s;
    :hover {
      transition: all 0.2s;
      color: ${props => props.theme.a.hover.color};
      text-decoration: ${props => props.theme.a.hover.textDecoration};
    }
  }
  b, strong {
    font-weight: bold;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.SansSerif};
  }
  h1{
    margin:${props => props.theme.h1.margin};
    padding:${props => props.theme.h1.padding};
    font-size:${props => props.theme.h1.fontSize};
    line-height: 1.4;
  }
  h2{
    margin:${props => props.theme.h2.margin};
    padding:${props => props.theme.h2.padding};
    font-size:${props => props.theme.h2.fontSize};
    line-height: 1.4;
  }
  h3{
    margin:${props => props.theme.h3.margin};
    padding:${props => props.theme.h3.padding};
    font-size:${props => props.theme.h3.fontSize};
    line-height: 1.4;
  }
  h4{
    margin:${props => props.theme.h4.margin};
    padding:${props => props.theme.h4.padding};
    font-size:${props => props.theme.h4.fontSize};
    line-height: 1.4;
  }
  h5{
    margin:${props => props.theme.h5.margin};
    padding:${props => props.theme.h5.padding};
    font-size:${props => props.theme.h5.fontSize};
    line-height: 1.4;
  }
  h6{
    margin:${props => props.theme.h6.margin};
    padding:${props => props.theme.h6.padding};
    font-size:${props => props.theme.h6.fontSize};
    line-height: 1.4;
  }
  figcaption {
    font-family: ${props => props.theme.fonts.System};
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
  }
  sup {
    font-size: 75%;
    vertical-align: super;
  }
  ::selection {
    background: ${({ theme }) => theme.colors.accentColors[0]};
  }
  ::-moz-selection {
    background: ${({ theme }) => theme.colors.accentColors[0]};
  }
  .footnotes {
    ol, p {
      font-size: 14px !important;
    }
    p {
      padding-top: 0px !important;
    }
    .footnote-backref {
      display: none;
    }
  }
  .giphy-embed {
    margin-top: 2rem;
  }
`;

export default props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteUrl
            description
            languages {
              defaultLangKey
              langs
            }
            author {
              name
              bio
              homeCity
              email
              defaultLink
              twitter
            }
            sourceCodeLink
            menu {
              label
              link
              slug
            }
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};
