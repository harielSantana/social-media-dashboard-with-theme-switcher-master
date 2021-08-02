import { Header, HeaderContainer } from './styles';
import { SocialMediaText } from './SocialMediaText/index';
import { DarkModeButton } from './DarkModeButton';

export const HeaderDashboard = () => {
  return (
    <HeaderContainer>
      <Header>
        <SocialMediaText />
        <DarkModeButton />
      </Header>
    </HeaderContainer>
  );
};
