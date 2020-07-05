import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const SelectLanguage = (props) => {
  const links = props.langs.map(({ langKey, link, selected }) => (
    <Li>
      <LangLink key={langKey} to={link} selected={selected}>
        {langKey}
      </LangLink>
    </Li>
  ));

  return (
    <Nav>
      <Ul>{links}</Ul>
    </Nav>
  );
};

const Nav = styled.nav`
  padding: ${(props) => props.theme.i18n.selectLanguage.padding};
`;

const Ul = styled.ul``;

const LangLink = styled(Link)`
  font-size: ${(props) => props.theme.i18n.selectLanguage.li.fontSize};
  font-weight: ${(props) => props.theme.i18n.selectLanguage.li.fontWeight};
  text-transform: uppercase;
  padding: ${(props) => props.theme.i18n.selectLanguage.li.padding};
  color: ${(props) => (props.selected ? props.theme.colors.dark[3] : props.theme.colors.black)};
  &:hover {
    text-decoration: none;
    color: ${(props) =>
      props.selected ? props.theme.colors.dark[3] : (props) => props.theme.menu.desktop.a.active.color};
  }
`;

const Li = styled.li`
  &:nth-child(n + 2):before {
    content: '/';
    color: ${(props) => props.theme.colors.dark[3]};
  }
  display: inline-block;
`;

SelectLanguage.propTypes = {
  langs: PropTypes.array,
};

export default SelectLanguage;
