import { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import Toggler from "./components/Toggler";

import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <div className="wrapper" style={{ padding: "20px" }}>
        <GlobalStyles />
        <Toggler theme={theme} toggleTheme={themeToggler} />
        <Header />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
