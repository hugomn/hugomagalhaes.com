import React from 'react';
import PropTypes from 'prop-types';

export default class Html extends React.PureComponent {
  static propTypes = {
    headComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array
  };

  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="google-site-verification" content="NBlqqXXD29lFhJ2PNcmH27JZzroE5sy8gLzE98af9EA" />
          {this.props.headComponents}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/favicon.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="theme-color" content="#ffffff" />
          <link href="/css/reset.css" rel="stylesheet" />
          <link href="/css/font.css" rel="stylesheet" />
          <link href="/css/prism-atom-dark.css" rel="stylesheet" />
        </head>
        <body style={{ margin: 0, padding: 0 }}>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
            style={{
              height: '100%'
            }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
