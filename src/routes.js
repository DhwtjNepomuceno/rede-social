import { createBrowserRouter } from "react-router";
import HomePage from "./pages/Home";
import PerfisPage from "./pages/Perfils";

const routes = createBrowserRouter([
    {
        path: "/",
        Component: HomePage
    },
    {
        path: "perfis",
        Component: PerfisPage
    }
]);

export default routes;