import { createBrowserRouter } from "react-router";
import NotFound from "../Pages/Error/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <div>hi</div>
    },
    {
        path: 'not-found',
        element:<NotFound></NotFound>
    }
])