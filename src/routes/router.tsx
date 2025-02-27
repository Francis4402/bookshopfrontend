import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/HomePages/AboutPage";
import App from "../App";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import { routeGenerator } from "./routes.Generator";
import { adminPaths } from "./adminRoutes/admin_routes";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoute";
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
import NotFoundPage from "../pages/404pages/NotFoundPage";
import ProfilePage from "../pages/profilepage/ProfilePage";
import ProtectedR2 from "./ProtectedRoutes/ProtectedR2";





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
                element: <BookDetailspage/>,
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
            {
                path: '/profile/:id',
                element: <ProtectedR2><ProfilePage/></ProtectedR2>
            },
        ]
    },
    {
        path: '/admin',
        element: <ProtectedRoute role="admin"><MainLayout/></ProtectedRoute>,
        children: routeGenerator(adminPaths),
    },
    {
        path: '/*',
        element: <NotFoundPage/>
    }
    
]);


export default route;