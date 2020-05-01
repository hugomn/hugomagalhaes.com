import styled from 'styled-components';
import {
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  overflow
} from 'styled-system';

import { Box } from './Box';
import themed from './helpers';

export const Flex = styled(Box)(
  {
    display: 'flex'
  },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  overflow,
  themed('Flex')
);

Flex.displayName = 'Flex';

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
  ...overflow.propTypes
};
