import React, { Component } from 'react';
import PropTypes from 'prop-types';

let __scriptAdded = false;

export default class DiscusCounter extends Component {
  static propTypes = {
    shortname: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    children: PropTypes.element,
    isLink: PropTypes.bool
  };

  static defaultProps = {
    isLink: false
  };

  componentDidMount() {
    this._resetComments();
  }

  componentDidUpdate() {
    this._resetComments();
  }

  _resetComments() {
    this._addDisqusScript();
    if (typeof DISQUSWIDGETS !== 'undefined') {
      window.DISQUSWIDGETS.getCount({ reset: true });
    }
  }

  _addDisqusScript() {
    if (__scriptAdded) {
      return;
    }

    const parent = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];

    const script = document.createElement('script');
    script.async = true;
    script.id = 'dsq-count-scr';
    script.type = 'text/javascript';
    script.src = '//' + this.props.shortname + '.disqus.com/count.js';
    parent.appendChild(script);

    __scriptAdded = true;
  }

  render() {
    let counterElement;
    if (this.props.isLink) {
      counterElement = React.createElement('a', { href: this.props.url + '#disqus_thread' }, this.props.children);
    } else {
      counterElement = React.createElement(
        'span',
        {
          className: ['disqus-comment-count'],
          'data-disqus-url': this.props.url
        },
        this.props.children
      );
    }
    return counterElement;
  }
}
