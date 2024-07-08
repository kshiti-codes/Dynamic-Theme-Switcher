import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import { Container, Heading } from './StyledComponents';
import GlobalStyle from './GlobalStyle';

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Container>
        <Heading>Dynamic Theme Switcher</Heading>
        <ThemeSwitcher />
      </Container>
    </ThemeProvider>
  );
};

export default App;
