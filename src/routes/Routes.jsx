import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import MyToys from "../pages/myToys/MyToys";
import AddAToy from "../pages/AddToy/AddAToy";
import Details from "../pages/details/Details";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/toys',
            element:<AllToys/>
        },
        {
            path:'/signup',
            element:<SignUp/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/myToys',
            element:<PrivateRoutes><MyToys/></PrivateRoutes>
        },
        {
            path:'/addAToy',
            element:<PrivateRoutes><AddAToy/></PrivateRoutes>
        },
        {
            path:'/details/:id',
            element:<PrivateRoutes><Details/></PrivateRoutes>,
            loader:({params})=>fetch(`https://ph-11th-server-tanvir.vercel.app/details/${params.id}`)
        },
        {
            path:'/blogs',
            element:<Blogs/>
        }
      ]
    },
  ]);


  export default router;



