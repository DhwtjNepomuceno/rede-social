import { createBrowserRouter } from "react-router";
import HomePage from "./pages/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        Component: HomePage
    }
]);

export default routes;