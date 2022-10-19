import { createBrowserRouter } from "react-router-dom";
import Root from "../My component/Root";
import Home from '../My component/Home.jsx'
import Products from "../My component/Products";
import CheckOut from "../My component/CheckOut";
import Cart from "../My component/Cart";
import About from "../My component/About";
import {getLoderData} from "../Lodder/getLoadData";
import ErrorPage from "../My component/ErrorePage";
import LogIn from "../My component/LogIn";
import SignUp from "../My component/SignUp";
import PrivetRouter from "../My component/PrivetRouter/PrivetRouter";
import PersonalProfile from "../My component/PersonalProfile";
const router = createBrowserRouter([
    {path:'/',
     element:<Root/>,
     errorElement:<ErrorPage/>,
     loader: getLoderData,
     children:[
        {
            path:'/',
            element:<Home/>                                                                                                                      
        },
        {
            path:'/products',
            element:<Products/>
        },
        {
            path:'/cart',
            element:<PrivetRouter><Cart/></PrivetRouter>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/checkout',
            element:<CheckOut/>
        },
        {
            path:'/profile',
            element:<PrivetRouter><PersonalProfile/></PrivetRouter>
        },
        {
            path:'/login',
            element:<LogIn/>
        },
        {
            path:'/signup',
            element:<SignUp/>
        },
     ]

    }
])

export default router