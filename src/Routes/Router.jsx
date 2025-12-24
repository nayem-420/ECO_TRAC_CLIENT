import { createBrowserRouter } from "react-router";
import NotFound from "../Pages/Error/NotFound";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>
    },
    {
        path: '*',
        element:<NotFound></NotFound>
    }
])