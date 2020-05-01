import styled from 'styled-components';
import { color, typography } from 'styled-system';
import { media } from 'constants/responsive';

export const Label = styled.label`
  ${color}
  ${typography}
  margin-bottom: 8px;
  font-size: ${({ theme: t }) => t.scale(-1)};
  ${media.md`
    font-size: ${({ theme: t }) => t.scale(0)};
  `}
`;
