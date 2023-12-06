import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/root/Root";
import Error404 from "../components/error404/Error404";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <Error404/>,
        children: [
            {
                path: "/",
                element:,
            },
            
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;