import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }

  body{
    font-family: 'Inter', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
`;
