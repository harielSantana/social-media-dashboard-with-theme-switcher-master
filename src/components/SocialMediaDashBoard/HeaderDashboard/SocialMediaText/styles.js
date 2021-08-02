import styled from 'styled-components';

export const SocialMediaTextBox = styled.div`
  h1 {
    color: ${({ theme }) => theme.text};
  }

  p {
    color: ${({ theme }) => theme.secondText};
  }
`;
