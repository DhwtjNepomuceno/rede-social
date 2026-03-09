import "./style.css";
import HomePage from "../../pages/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    main: {
      primary: "#21BFAF",
      secondary: "#B0D9D5",
      tertiary: "#D96F66",
      white: "#F2F0EB",
      black: "#0D0D0D",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
