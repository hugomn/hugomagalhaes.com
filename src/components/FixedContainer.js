import styled from 'styled-components';
import { flexbox, layout, space, color } from 'styled-system';

const FixedContainer = styled('section')(
  {
    maxWidth: ({ theme: t }) => t.maxWidth,
    margin: '0 auto',
    padding: ({theme: t}) => `0 ${t.scaleN(2)}rem`
  },
  color,
  flexbox,
  layout,
  space
);

FixedContainer.displayName = 'FixedContainer';

FixedContainer.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...flexbox.propTypes,
  ...layout.propTypes,
};

export default FixedContainer;
