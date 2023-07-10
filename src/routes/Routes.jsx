import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import MainLayout from "../components/layouts/MainLayout";
import About from "../components/pages/About";
import Course from "../components/pages/Course";
import Contact from "../components/pages/Contact";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/course',
                element: <Course></Course>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },

        ]
    },




    {
        path: '/*',
        element: "hhhh",
    },
])