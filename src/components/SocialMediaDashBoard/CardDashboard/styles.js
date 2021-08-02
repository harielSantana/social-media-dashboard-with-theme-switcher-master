import styled from 'styled-components';
// import FacebookImg from '../../../images/icon-facebook.svg';
// import InstagramImg from '../../../images/icon-instagram.svg';
// import TwitterImg from '../../../images/icon-twitter.svg';
// import YoutubeImg from '../../../images/icon-youtube.svg';

export const Container = styled.div`
  width: 100%;
`;

export const CardDashboardContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  margin-top: -8rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3rem;
`;

export const CardBox = styled.div`
  width: 21rem;
  height: 17rem;
  border-radius: 5px;
  border-top: 5px solid ${(props) => props.backgroundCardColor};
  background: ${({ theme }) => theme.card};

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
`;

export const SocialCardbox = styled.div`
  display: flex;
  justify-content: center;

  span {
    color: ${({ theme }) => theme.secondText};
  }
  img {
    margin-right: 5px;
  }
`;

// export const IconImage = styled.attrs();

export const FollowersCardbox = styled.div`
  h1 {
    font-size: 4.4rem;
    color: ${({ theme }) => theme.text};
  }
  p {
    color: ${({ theme }) => theme.secondText};
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 5px;
  }
`;

export const TodayFollowerCardbox = styled.div`
  span {
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) =>
      props.numberOfFollowers >= 0
        ? 'hsl(163, 72%, 41%)'
        : 'hsl(356, 69%, 56%)'};
    img {
      margin-right: 5px;
    }
  }
`;
