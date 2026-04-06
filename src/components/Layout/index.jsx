import "./style.css";
import VoltarPaginas from "../voltarPagina";

import { Outlet, useLocation } from "react-router";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


function Layout() {
  const nome = "Usuário";
  const locate = useLocation();
  const isHome =  locate.pathname === "/";

  return (
    <>
      <Box component="header" sx={{ p: 4, bgcolor: "main.primary" }}>
        {(!isHome) && <VoltarPaginas />}
        <Typography component="h1" variant="h4" color="main.white">
          Boas-vindas à Hireon, {nome}
        </Typography>
      </Box>

      <Outlet />
    </>
  );
}

export default Layout;