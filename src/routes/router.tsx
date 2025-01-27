import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import App from "../App";

const route = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/about",
        element: <AboutPage/>
    }
]);


export default route;