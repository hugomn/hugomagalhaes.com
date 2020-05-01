import styled from 'styled-components';
import {
  space,
  color,
  display,
  width,
  maxWidth,
  minWidth,
  typography,
  fontSize,
  flexbox,
  order,
  alignSelf,
  borders,
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  height,
  gridArea
} from 'styled-system';

import themed from './helpers';

export const Box = styled('div')(
  {
    boxSizing: 'border-box'
  },
  space,
  color,
  display,
  width,
  typography,
  maxWidth,
  minWidth,
  fontSize,
  flexbox,
  order,
  alignSelf,
  borders,
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  height,
  gridArea,
  props => props.css,
  themed('Box')
);

Box.displayName = 'Box';

Box.propTypes = {
  ...space.propTypes,
  ...flexbox.propTypes,
  ...color.propTypes,
  ...typography.propTypes,
  ...display.propTypes,
  ...width.propTypes,
  ...maxWidth.propTypes,
  ...fontSize.propTypes
};
