import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import PerfisPage from "./pages/Perfils";
import PerfilDetalhesPage from "./pages/PerfilDetalhes";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "perfis", Component: PerfisPage },
      { path: "perfis/:id", Component: PerfilDetalhesPage }
    ]
  }
]);

export default routes;