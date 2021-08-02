import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.insideBody};
`;

export const Header = styled.header`
  max-width: 1440px;
  height: 30vh;
  margin: auto;
  padding-top: 3rem;

  display: flex;
  justify-content: space-between;
`;
