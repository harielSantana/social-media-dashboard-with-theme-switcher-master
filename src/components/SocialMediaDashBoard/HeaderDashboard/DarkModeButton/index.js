import { Container, Slider, Switch, TextBox, ToggleButton } from './styles';
import { ThemeContext, ThemeProvider } from '../../../../context';
import { useContext } from 'react';

export const DarkModeButton = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Container>
      <TextBox>Dark Mode</TextBox>
      <ToggleButton onClick={() => {}}>Toglle</ToggleButton>
      {/* <Switch>
        <input type="checkbox" />
        <Slider></Slider>
      </Switch> */}
    </Container>
  );
};
