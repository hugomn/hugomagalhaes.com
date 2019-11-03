import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Section = styled.section`
  text-align: celeftnter;
  margin: 1rem 0;
  padding: 0;
`;

const Li = styled.li`
    display: inline;
    &:not(:last-child):after{
        content: ' ';
        margin: 0 1rem 0 0;
        display: inline-block;
    }
`;

const A = styled(Link)`
  font-family: ${({theme}) => theme.fonts.SansSerif};
  font-size: ${({theme}) => theme.scale(0)};
  color: ${({theme}) => theme.colors.black};
  background: rgba(0,0,0,.05);
  border-radius: 3px;
  display: inline-block;
  position: relative;
  transition: 0.3s;
  padding: ${({theme}) => theme.scale(-2)} ${({theme}) => theme.scale(-2)};
  &:hover {
      background: ${({theme}) => theme.colors.brand};
      text-decoration: none;
      color: ${({theme}) => theme.colors.white};
      transition: 0.3s;
  }
`;

const Tag = ({tag}) => {
  return (
    <Li>
      <A to={tag.link}>
        {tag.tag}
      </A>
    </Li>
  );
};

Tag.propTypes = {
  tag: PropTypes.object
};

const Ul = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: block;
`;

const Tags = (props) => {
  if(!props.tags || props.tags.length === 0) return null;

  return (
    <Section>
      <Ul>
        {
          (props.tags || []).map((tag, i) =>
            <Tag tag={tag} key={i} />)
        }
      </Ul>
    </Section>
  );
};

Tags.propTypes = {
  tags: PropTypes.array
};

export default Tags;
