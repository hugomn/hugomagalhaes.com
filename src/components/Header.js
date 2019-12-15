import React from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu';
import styled from 'styled-components';
import FixedContainer from './FixedContainer';
import throttle from 'lodash.throttle';
import SelectLanguage from './SelectLanguage';
import { Grid, Cell } from 'styled-css-grid';

const delta = 5;
const navbarHeight = 64;

class Header extends React.Component {

  constructor(props) {
    super(props);
    console.log('[dev:hugo] props', props);
    this.state = {
      didScroll: true,
      lastScrollTop: 0,
      hidden: false
    };
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  hideHeader = () => {
    this.setState({
      hidden: true
    });
  };

  showHeader = () => {
    this.setState({
      hidden: false
    });
  };

  hasScrolled = throttle(() => {
    const st = window.scrollY;
    if (Math.abs(this.state.lastScrollTop - st) <= delta) { return; }
    if (st > this.state.lastScrollTop && st > navbarHeight) {
      this.hideHeader();
    } else {
      if(st < this.getDocHeight()) {
        this.showHeader();
      }
    }
    this.setState({
      lastScrollTop: st
    });
  }, 250);

  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  };

  handleScroll = () => {
    this.setState({
      didScroll: true
    });
    this.hasScrolled();
  };

  render() {
    const { langs, menu, url } = this.props;
    return (
      <Wrapper hidden={this.state.hidden}>
        <FixedContainer>
          <Grid columns="1fr 140px">
            <MenuContainer>
              <Menu menu={menu} url={url} />
            </MenuContainer>
            <LanguageContainer>
              <SelectLanguage langs={langs} className="select-languages" />
            </LanguageContainer>
          </Grid>
        </FixedContainer>
      </Wrapper>
    );
  } 
};

const Wrapper = styled.header`
  background: rgba(255, 255, 255, 0.97);
  box-shadow: 0 4px 12px 0 rgba(0,0,0,.05) !important;
  border-top: 4px solid ${props => props.theme.colors.brand};
  transition: top 0.4s ease-in-out;
  height: ${props => props.theme.header.height}px;
  top: ${props => props.hidden ? `-${props.theme.header.height}px` : 0};
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  z-index: 9; 
`;

const MenuContainer = styled(Cell)`

`;

const LanguageContainer = styled(Cell)`
  text-align: right;
`;

Header.propTypes = {
  langs: PropTypes.array,
  menu: PropTypes.array.isRequired,
  url: PropTypes.string
};

export default Header;
