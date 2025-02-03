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
import OurServices from "../pages/HomePages/OurServices";
import ContactPage from "../pages/HomePages/ContactPage";
import FAQPage from "../pages/HomePages/FAQPage";
import AllProducts from "../pages/HomePages/AllProducts";
import Cart from "../pages/HomePages/Cart";
import CheckOut from "../pages/HomePages/CheckOut";
import BookDetailspage from "../pages/detailpages/BookDetailspage";



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
                path: "/ourservices",
                element: <OurServices/>
            },
            {
                path: "/allproducts",
                element: <AllProducts/>
            },
            {
                path: "/contact",
                element: <ContactPage/>
            },
            {
                path: "/faqpage",
                element: <FAQPage/>
            },
            {
                path: '/:productname/:id',
                element: <BookDetailspage/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/checkout",
                element: <CheckOut/>
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
        element: <ProtectedRoute role="admin"><MainLayout/></ProtectedRoute>,
        children: routeGenerator(adminPaths),
    },
    
]);


export default route;