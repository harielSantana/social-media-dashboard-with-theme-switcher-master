import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const CardOverviewContainer = styled.div`
  max-width: 1440px;
  margin: auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3rem;
`;

export const CardBox = styled.div`
  padding: 1.8rem;
  border-radius: 5px;
  background: ${({ theme }) => theme.card};
  width: 21rem;
  height: 10rem;

  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const CardText = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.text};
`;

export const CardTextImg = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const CardNumbers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: ${({ theme }) => theme.text};

  h1 {
    font-size: 2.8em;
  }
`;

export const CardNumbersPercentage = styled.div`
  span {
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) =>
      props.percentageNumber >= 0
        ? 'hsl(163, 72%, 41%)'
        : 'hsl(356, 69%, 56%)'};
    img {
      margin-right: 5px;
    }
  }
`;
