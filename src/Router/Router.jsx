import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Favorites from "../pages/Favorite/Favorites";
import Login from "../pages/Login/Login";

const myRouter = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=> fetch('phones.json')
            },
            {
                path: '/favorites',
                element: <Favorites></Favorites>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default myRouter;