import {
  CardBox,
  CardNumbers,
  CardNumbersPercentage,
  CardOverviewContainer,
  CardText,
  CardTextImg,
  Container,
} from './style';

import { OverviewData } from '../../../mocks/overview';
import upperSvg from '../../../images/icon-up.svg';
import downSvg from '../../../images/icon-down.svg';
import FacebookImg from '../../../images/icon-facebook.svg';
import InstagramImg from '../../../images/icon-instagram.svg';
import TwitterImg from '../../../images/icon-twitter.svg';
import YoutubeImg from '../../../images/icon-youtube.svg';

export const CardOverview = () => {
  return (
    <Container>
      <CardOverviewContainer>
        {OverviewData.map((data) => {
          return (
            <CardBox>
              <CardText>
                <span>{data.text}</span>
                <CardTextImg
                  src={
                    data.media === 'Facebook'
                      ? FacebookImg
                      : data.media === 'Twitter'
                      ? TwitterImg
                      : data.media === 'Instagram'
                      ? InstagramImg
                      : data.media === 'Youtube'
                      ? YoutubeImg
                      : 'nothing'
                  }
                  alt={data.media}
                />
              </CardText>
              <CardNumbers>
                <h1>{data.views}</h1>
                <CardNumbersPercentage percentageNumber={data.percentage}>
                  <span>
                    {data.percentage >= 0 ? (
                      <img src={upperSvg} alt="upper" />
                    ) : (
                      <img src={downSvg} alt="down" />
                    )}
                    {data.percentage}
                  </span>
                </CardNumbersPercentage>
              </CardNumbers>
            </CardBox>
          );
        })}
      </CardOverviewContainer>
    </Container>
  );
};
