import "./style.css";
import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router";
import routes from "../../routes";
import theme from "../../styles/theme/dark";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;
