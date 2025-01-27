import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import App from "../App";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const route = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/about",
        element: <AboutPage/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    }
]);


export default route;