import { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import FooterImage from "./components/FooterImage";
import { useDarkMode } from "./hooks/useDarkMode";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import Toggler from "./components/Toggler";

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <Toggler theme={theme} toggleTheme={themeToggler} />
        <GlobalStyles />
        <Header />
        <Certifications />
        <Contact />
        <Projects />
        <FooterImage />
      </>
    </ThemeProvider>
  );
}

export default App;
