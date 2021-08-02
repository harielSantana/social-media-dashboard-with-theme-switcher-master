import {
  CardBox,
  CardDashboardContainer,
  Container,
  SocialCardbox,
  FollowersCardbox,
  TodayFollowerCardbox,
} from './styles';

import upperSvg from '../../../images/icon-up.svg';
import downSvg from '../../../images/icon-down.svg';
import { SocialData } from '../../../mocks/socialdata';

import FacebookImg from '../../../images/icon-facebook.svg';
import InstagramImg from '../../../images/icon-instagram.svg';
import TwitterImg from '../../../images/icon-twitter.svg';
import YoutubeImg from '../../../images/icon-youtube.svg';

export const CardDashboard = () => {
  return (
    <Container>
      <CardDashboardContainer>
        {SocialData.map((data) => {
          return (
            <CardBox
              backgroundCardColor={
                data.socialmedia === 'Facebook'
                  ? 'hsl(208, 92%, 53%)'
                  : data.socialmedia === 'Twitter'
                  ? 'hsl(203, 89%, 53%)'
                  : data.socialmedia === 'Instagram'
                  ? ' hsl(329, 70%, 58%)'
                  : data.socialmedia === 'Youtube'
                  ? 'hsl(348, 97%, 39%)'
                  : 'white'
              }
            >
              <SocialCardbox>
                <img
                  src={
                    data.socialmedia === 'Facebook'
                      ? FacebookImg
                      : data.socialmedia === 'Twitter'
                      ? TwitterImg
                      : data.socialmedia === 'Instagram'
                      ? InstagramImg
                      : data.socialmedia === 'Youtube'
                      ? YoutubeImg
                      : ''
                  }
                  alt={data.socialmedia}
                />
                <span>
                  {data.socialmedia === 'Youtube' ? data.tag : `@${data.tag}`}
                </span>
              </SocialCardbox>
              <FollowersCardbox>
                <h1>{data.followers}</h1>
                {data.socialmedia === 'Youtube' ? (
                  <p>subscribers</p>
                ) : (
                  <p>followers</p>
                )}
              </FollowersCardbox>
              <TodayFollowerCardbox numberOfFollowers={data.followsToday}>
                <span>
                  {data.followsToday >= 0 ? (
                    <img src={upperSvg} alt="upper" />
                  ) : (
                    <img src={downSvg} alt="down" />
                  )}
                  {data.followsToday} Today
                </span>
              </TodayFollowerCardbox>
            </CardBox>
          );
        })}
      </CardDashboardContainer>
    </Container>
  );
};
