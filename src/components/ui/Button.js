import styled from 'styled-components';
import { space, width } from 'styled-system';

const Button = styled.button`
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  background-color: ${({ secondary, theme }) =>
    secondary ? theme.colors.accent[3] : theme.colors.accent[2]};
  font-size: ${({ theme }) => theme.scale(-0.6)};
  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-weight: 500;
  padding: 0.6rem 1rem;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.4rem;
  text-decoration: none;
  transition: 0.3s;
  border-width: 0px;
  line-height: 24px;
  ${space};
  ${width}
  &:hover:not(:disabled) {
    background-color: ${({ secondary, theme }) => (secondary ? theme.colors.accent[0] : theme.colors.brand)};
    color: ${({ theme }) => theme.colors.white};
    transition: 0.3s;
    cursor: pointer;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightColors[3]};
  }
`;

export default Button;
