import styled from 'styled-components';
import { color, space } from 'styled-system';
import { media } from 'constants/responsive';

export const Input = styled.input`
  ${color}
  font-size: ${({ theme: t }) => t.scale(-1)};
  padding: 12px 10px;
  border-radius: 4px;
  border: 1px solid ${({ theme: t }) => t.colors.lightColors[3]};
  font-family: ${({ theme: t }) => t.fonts.Poppins};
  color: ${({ theme: t }) => t.colors.dark[1]};
  ${space}
  &::placeholder {
    color: ${({ theme: t }) => t.colors.lightColors[3]};
  }
  &:focus,
  &:active {
    outline: none;
    border: 1px solid ${props => props.theme.colors.brand};
    box-shadow: 0px 0px 1px 0px ${props => props.theme.colors.brand};
  }
  ${media.md`
    font-size: ${({ theme: t }) => t.scale(0.2)};
    padding: 12px 12px;
  `}
`;
