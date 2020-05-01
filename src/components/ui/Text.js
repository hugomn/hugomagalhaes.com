import styled from 'styled-components';
import {
  color,
  fontFamily,
  fontWeight,
  fontSize,
  textAlign,
  lineHeight,
  letterSpacing
} from 'styled-system';

import themed from 'components/helpers';
import { Box } from 'components/Box';

export const Text = styled(Box)(
  color,
  fontFamily,
  fontWeight,
  fontSize,
  textAlign,
  lineHeight,
  letterSpacing,
  themed('Text')
);

Text.propTypes = {
  ...color.propTypes,
  ...fontFamily.propTypes,
  ...fontWeight.propTypes,
  ...fontSize.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...letterSpacing.propTypes
};

Text.displayName = 'Text';

export default Text;
