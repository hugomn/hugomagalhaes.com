import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaHeart } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import { withPrefix } from 'gatsby';
import FixedContainer from './FixedContainer';
import { media } from '../constants/responsive';

const Footer = ({ author, langs, sourceCodeLink, currentLangKey }) => {
  return (
    <Wrapper>
      <FixedContainer>
        <Grid columns="repeat(auto-fit,minmax(220px,1fr))">
          <LeftCell middle>
            <span>
              {' Made with '}
              <HeartIcon />
              {' and '}
              <a href="https://www.gatsbyjs.org/" target="_blank">
                <GatsbyIcon src={withPrefix('/img/gatsbyjs.svg')} alt="Gatsby" />
              </a>
              {' by '} <span>{author.name}</span>
            </span>
          </LeftCell>
          <MiddleCell middle>
            <a href={sourceCodeLink} target="_blank">
              <GithubIcon />
            </a>
          </MiddleCell>
        </Grid>
      </FixedContainer>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  border-top: 1px solid rgba(0, 0, 0, 0.1) !important;
  padding: 10px 30px;
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.44);
`;

const GatsbyIcon = styled.img`
  width: 18px;
  height: 18px;
  vertical-align: middle;
  margin: 0 6px;
  opacity: 0.6;
  filter: grayscale(100%);
  transition: all 0.4s;
  &:hover {
    opacity: 1;
    filter: grayscale(0%);
  }
`;

const GithubIcon = styled(FaGithub)`
  font-size: ${({ theme }) => theme.scale(3)};
  color: ${({ theme }) => theme.colors.black};
  display: inline-block;
  margin: auto;
  opacity: 0.7;
  padding: 0 ${({ theme }) => theme.scale(-6)} 0 0;
  :hover {
    color: ${props => props.theme.colors.brand}!important;
  }
`;

const HeartIcon = styled(FaHeart)`
  margin: 0 6px;
  cursor: pointer;
  transition: all 0.4s;
  animation: ${keyframes`to { transform: scale(1.2); }`} 0.42s infinite alternate;
  :hover {
    color: ${props => props.theme.colors.red}!important;
  }
`;

const MiddleCell = styled(Cell)`
  text-align: right;
  display: none;
  ${media.md`
    text-align: right;
    display: inline-flex;
  `};
`;

const LeftCell = styled(Cell)`
  text-align: center;
  ${media.md`
    text-align: left;
  `};
`;

Footer.propTypes = {
  author: PropTypes.object.isRequired,
  langs: PropTypes.array,
  sourceCodeLink: PropTypes.string.isRequired,
  currentLangKey: PropTypes.string
};

export default Footer;
