import { NavLink } from "react-router-dom";
import AddNewBooks from "../../pages/Dashboard/adminsidebarPages/BookMangement/AddNewBooks";
import GetAllBooks from "../../pages/Dashboard/adminsidebarPages/BookMangement/GetAllBooks";
import GetAllUsers from "../../pages/Dashboard/adminsidebarPages/GetAllUsers";
import UpdateBookDetails from "../../pages/Dashboard/adminsidebarPages/BookMangement/UpdateBookDetails";
import Dashboard from "../../pages/Dashboard/Dashboard";
import GetAllOrders from "../../pages/Dashboard/orderPages/GetAllOrders";
import OrderRevenue from "../../pages/Dashboard/orderPages/OrderRevenue";
import { TSidebarItem } from "../../types";
import { MdDashboard } from "react-icons/md";
import { GiBookmarklet } from "react-icons/gi";
import { FaUser } from "react-icons/fa6";
import { GiBuyCard } from "react-icons/gi";


export const adminPaths = [
    {
        name: 'Dashboard',
        icon: <MdDashboard size={20}/>,
        path: 'dashboard',
        element: <Dashboard/>
    },
    {
        name: 'BookShop Management',
        icon: <GiBookmarklet size={20} />,
        children: [
            {
                name: 'All Books',
                path: 'get-products',
                element: <GetAllBooks/>
            },
            {
                name: 'Add New Books',
                path: 'add-products',
                element: <AddNewBooks/>
            },
            {
                name: 'Update Book Details',
                path: 'update-products',
                element: <UpdateBookDetails/>
            }
        ]
    },
    {
        name: 'User Management',
        icon: <FaUser size={15}/>,
        children: [
            {
                name: 'All Users',
                path: 'all-users',
                element: <GetAllUsers/>
            }
        ]
    },
    {
        name: 'Order Management',
        icon: <GiBuyCard size={20} />,
        children: [
            {
                name: 'All Orders',
                path: 'orders',
                element: <GetAllOrders/>
            },
            {
                name: 'Order Revenue',
                path: 'orders/revenue',
                element: <OrderRevenue/>
            }
        ]
    }
];

export const adminSidebarItems = adminPaths.reduce((acc: TSidebarItem[], item) => {
    if(item.path && item.name) {
        acc.push({
            key: item.name,
            icon: item.icon,
            label: <NavLink to = {`/admin/${item.path}`}>{item.name}</NavLink>
        });
    }

    if (item.children) {
        acc.push({
            key: item.name,
            label: item.name,
            icon: item.icon,
            children: item.children.map((child) => ({
                key: child.name,
                icons: item.icon,
                label: <NavLink to = {`/admin/${child.path}`}>{child.name}</NavLink>
            })),
        });
    }

    return acc;
}, []);