import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import MainLayout from "../components/layouts/MainLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },

        ]
    },




    {
        path: '/*',
        element: "hhhh",
    },
])