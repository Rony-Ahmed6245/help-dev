import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Curd from "../Pages/Curd";
import Dashboard from "../Layouts/Dashboard";
import Blog from "../Pages/Blog";
import DashboardHome from "../Pages/DashboardHome";
import Express from "../Pages/Express";
import Alert from "../Pages/Alert";


export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element:<Blog></Blog>,
                }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path:'/dashboard',
                element: <DashboardHome></DashboardHome>,
            },
            {
                path: 'curd',
                element: <Curd></Curd>
            }
            ,
            {
                path: 'express',
                element:<Express></Express>,
            }
            ,
            {
                path: 'alert',
                element:<Alert></Alert>
            }
        ]
    }
    
])