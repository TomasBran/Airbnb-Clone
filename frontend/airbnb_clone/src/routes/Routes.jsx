import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/root/Root";
import Error404 from "../components/error404/Error404";
import { CardContainer } from "../components/shared";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <Error404/>,
        children: [
            {
                path: "/",
                element: <CardContainer/>,
            },
            
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;