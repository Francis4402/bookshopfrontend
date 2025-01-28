import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/HomePages/AboutPage";
import App from "../App";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import { routeGenerator } from "./routes.Generator";
import { adminPaths } from "./adminRoutes/admin_routes";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../pages/layouts/MainLayout";
import Home from "../pages/Home";
import EventsPage from "../pages/HomePages/EventsPage";


const route = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/about",
                element: <AboutPage/>
            },
            {
                path: "/events",
                element: <EventsPage/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
        ]
    },
    {
        path: '/admin',
        element: <ProtectedRoute><MainLayout/></ProtectedRoute>,
        children: routeGenerator(adminPaths),
    },
    
]);


export default route;