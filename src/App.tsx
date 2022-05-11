import React from 'react';
import Main from './Components/Main';

import { DefaultTheme, ThemeProvider } from 'styled-components';
import light from './Styles/theme/light';
import dark from './Styles/theme/dark';
import usePersistedState from './utils/usePersistedState';
import { NavProvider } from './Context/NavContext';

const App: React.FC = () => {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light);

  return (
    <ThemeProvider theme={theme}>
      <NavProvider>
          <Main toggleTheme={toggleTheme}/>
      </NavProvider>
    </ThemeProvider>

  );
}

export default App;
