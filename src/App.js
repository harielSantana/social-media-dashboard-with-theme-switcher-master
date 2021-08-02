import { SocialMediaDashboard } from './components/SocialMediaDashBoard';
import { OverviewToday } from './components/OverviewToday';

import { ThemeProvider } from 'styled-components';
import { ThemeProviderContext } from './context';
import { GlobalStyles } from './components/Theme/globalStyles';
import { lightTheme, darkTheme } from './components/Theme/Theme';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <SocialMediaDashboard />
      <OverviewToday />
    </ThemeProvider>
  );
}

export default App;
