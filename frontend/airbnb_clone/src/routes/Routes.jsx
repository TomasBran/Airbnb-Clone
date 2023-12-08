import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/root/Root";
import Error404 from "../components/error404/Error404";
import { CardContainer } from "../components/shared";
import { PropertyRegister } from "../components/property/PropertyRegister";


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
            {
                path: "/property-register",
                element: <PropertyRegister/>
            }
            
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;