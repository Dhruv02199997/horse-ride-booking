import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home/Home";
import AboutUs from "../components/AboutUs/About";
import Book from "../components/BookRide/Book";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {path:'about',
                element:<AboutUs/>
            },
            {path:'bookride',element:<Book/>}
        ]
    }
])