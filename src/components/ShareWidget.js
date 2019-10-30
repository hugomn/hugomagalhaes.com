import React from 'react';
import PropTypes from 'prop-types';
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';
import { visible } from '../constants/responsive'; 
import links from '../constants/socialLinks';
import DisqusCounter from './DisqusCounter';


const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: ${props => props.theme.socialLinks.margin};
  padding: ${props => props.theme.socialLinks.padding};
  list-style: none;
`;

const A = styled.a`
  color: ${props => props.theme.socialLinks.a.color};
  text-decoration: none;
  font-size: ${props => props.theme.socialLinks.a.fontSize};
  display: inline-block;
  margin: ${props => props.theme.socialLinks.a.margin};
  padding: ${props => props.theme.socialLinks.a.padding};
  transition: 0.3s;
  opacity: 0.7;
  &:hover {
    opacity: 1;
    color: ${props => props.theme.socialLinks.a.hover.color};
    transition: 0.3s;
  }
`;

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  width: 60px;
  transform: translateY(230px) translateX(-100px);
  ${visible.lg}
`;

const DisqusContainer = styled.li`
  color: rgba(0, 0, 0, 0.44);
  border-top: 1px solid rgba(0, 0, 0, 0.30);
  padding-top: 20px;
  font-size: 0.7rem;
  max-width: 60px;
  text-align: center;
`;

const ShareWidget = ({ disqusShortname, url, message }) => {
  return (
    <Wrapper>
      <Ul>
        <li>
          <A href={links.twitter(url, message)} target="_blank"
            rel="noreferrer noopener"
            aria-label="Share on twitter"
            title="Share on twitter">
            <FaTwitter />
          </A>
        </li>
        <li>
          <A href={links.facebook(url, message)} target="_blank"
            rel="noreferrer noopener"
            aria-label="Share on facebook"
            title="Share on facebook">
            <FaFacebook />
          </A>
        </li>
        <li>
          <A href={links.linkedin(url, message)} target="_blank"
            rel="noreferrer noopener"
            aria-label="Share on Linkedin"
            title="Share on Linkedin">
            <FaLinkedin />
          </A>
        </li>
        <li>
          <A href={links.google(url, message)} target="_blank"
            rel="noreferrer noopener"
            aria-label="Share on Google+"
            title="Share on Google+">
            <FaGoogle />
          </A>
        </li>
        <DisqusContainer>
          <DisqusCounter
            url={url}
            shortname={disqusShortname}
          />
        </DisqusContainer>
      </Ul>
    </Wrapper>
  );
};

ShareWidget.propTypes = {
  disqusShortname: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default ShareWidget;
