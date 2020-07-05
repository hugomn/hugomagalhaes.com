import React from 'react';
import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa';
import { InvisibleSpan } from './Invisible';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { equals } from 'ramda';
import { injectIntl, FormattedMessage } from 'react-intl';
import { hidden, media } from '../constants/responsive';

class Menu extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  open = (event) => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  getMenuItems = (isSelected, menu, langKey) => {
    return menu.map((item) => {
      const slug = `${langKey !== 'en' ? `/${langKey}` : ''}${item.slug}`;
      const subItems = item.items ? (
        <ul style={{ display: 'none' }}>{this.getMenuItems(isSelected, item.items, langKey)}</ul>
      ) : null;

      return (
        <li key={item.slug}>
          <FormattedMessage id={item.label}>
            {(label) =>
              item.link ? (
                <MenuA target="_blank" href={item.link}>
                  {label}
                </MenuA>
              ) : (
                <MenuLink selected={isSelected(slug)} to={slug} onClick={this.open}>
                  {label}
                </MenuLink>
              )
            }
          </FormattedMessage>
          {subItems}
        </li>
      );
    });
  };

  render() {
    const { isOpen } = this.state;
    const isSelected = equals(this.props.url);
    const menuItems = this.getMenuItems(isSelected, this.props.menu, this.props.intl.locale);

    return (
      <section>
        <CloseNav isOpen={isOpen} onClick={this.open} />
        <MenuLabel isOpen={isOpen} htmlFor="cb-menu">
          <FaBars />
          <InvisibleSpan>Menu</InvisibleSpan>
          <Checkbox type="checkbox" name="cb-menu" id="cb-menu" checked={this.state.isOpen} onChange={this.open} />
        </MenuLabel>
        <Nav isOpen={isOpen}>
          <FixedContainer>
            <Ul isOpen={isOpen}>{menuItems}</Ul>
          </FixedContainer>
        </Nav>
      </section>
    );
  }
}

const CloseNav = styled.section`
  ${hidden.md}
  ${(props) =>
    props.isOpen
      ? ` top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: fixed;`
      : ''};
`;

const Nav = styled.nav`
  text-align: center;
  position: fixed;
  top: 0;
  right: calc(-100%);
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  z-index: 2;
  padding: ${(props) => props.theme.menu.mobile.padding};
  transition-timing-function: ease-in, step-start, cubic-bezier(0.1, 0.7, 1, 0.1);
  transition: ${(props) =>
    props.isOpen ? 'transform 1s, background-color 0.5s' : 'transform 0.5s, background-color 1s'};
  background-color: ${(props) =>
    props.isOpen ? props.theme.menu.mobile.opened.bg : props.theme.menu.mobile.closed.bg};
  ${(props) => (props.isOpen ? 'transform: translateX(-60%);' : '')};
  ${media.md`
    padding: ${(props) => props.theme.menu.desktop.padding};
    display: flex;
    flex-grow: 1;
    align-items: center;
    position: relative;
    right: auto;
    left: auto;
    height: auto;
    z-index: 1030;
    transform: none;
    background-color: ${(props) => props.theme.menu.mobile.closed.bg};
  `}
`;

const MenuLabel = styled.label`
  ${hidden.md}
  width: ${(props) => props.theme.menu.mobile.label.width};
  height: ${(props) => props.theme.menu.mobile.label.height};
  position: relative;
  float: left;
  cursor: pointer;
  color: ${(props) => props.theme.colors.dark};
  margin: 1.6rem 1.8rem;
  transition: color 0.4s;
  font-size: ${(props) => props.theme.menu.mobile.label.fontSize};
  &:hover {
    color: ${(props) => props.theme.colors.brand};
    transition: color 0.4s;
  }
`;

const Checkbox = styled.input`
  ${hidden.md}
  position: absolute;
  opacity: 0.02;
  cursor: pointer;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

export const MenuLink = styled(Link)`
  font-size: ${(props) => props.theme.menu.mobile.a.fontSize};
  font-family: ${(props) => props.theme.menu.mobile.a.fontFamily};
  padding: ${(props) => props.theme.menu.mobile.a.padding};
  display: block;
  text-align: ${(props) => props.theme.menu.mobile.a.textAlign};
  text-decoration: none;
  transition: 0.5s;
  color: ${(props) => (props.selected ? props.theme.menu.mobile.a.active.color : props.theme.menu.mobile.a.color)};
  &:hover {
    color: ${(props) => props.theme.menu.mobile.a.active.color};
    transition: 0.5s;
    text-decoration: none;
  }
  ${media.md`
      display: inline;
      font-size: ${(props) => props.theme.menu.desktop.a.fontSize};
      font-family: ${(props) => props.theme.menu.desktop.a.fontFamily};
      font-weight: ${(props) => props.theme.menu.desktop.a.fontWeight};
      text-transform: uppercase;
      padding: ${(props) => props.theme.menu.desktop.a.padding};
      color: ${(props) =>
        props.selected ? props.theme.menu.desktop.a.active.color : props.theme.menu.desktop.a.color};
      &:hover {
        color: ${(props) => props.theme.menu.desktop.a.active.color};
      }
    `}
`;

const MenuA = MenuLink.withComponent(styled.a``);

const Ul = styled.ul`
  display: block;
  margin: ${(props) => props.theme.menu.mobile.ul.margin};
  list-style: none;
  transition: opacity 1s, transform 0.5s;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  ${media.md`
      opacity: 1;
      margin: ${(props) => props.theme.menu.desktop.ul.margin};
      li {
        display: inline-block;
      }
    `}
`;

const FixedContainer = styled.div`
  ${media.md`
    width: ${(props) => props.theme.maxWidth};
    margin: 0 auto;
    text-align: ${(props) => props.theme.menu.desktop.a.textAlign};;
  `}
`;

Menu.propTypes = {
  menu: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Menu);
