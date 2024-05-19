import { ThemeProvider } from "@emotion/react";
import { Container, CssBaseline, createTheme } from "@mui/material";
import Auth from "./components/auth/Auth.component";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Auth />
      </Container>
    </ThemeProvider>
  );
};

export default App;
