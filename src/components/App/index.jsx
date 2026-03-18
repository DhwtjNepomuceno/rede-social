import "./style.css";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { RouterProvider } from "react-router";
import routes from "../../routes";
import theme from "../../styles/theme/dark";

function App() {
  const nome = "Usuário";

  return (
    <ThemeProvider theme={theme}>
      <Box component="header" sx={{ p: 4, bgcolor: "main.primary" }}>
        <Typography component="h1" variant="h4" color="main.white">
          Boas-vindas à Devisal, {nome}
        </Typography>
      </Box>

      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;
