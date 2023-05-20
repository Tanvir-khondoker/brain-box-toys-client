import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import AllToys from "../pages/toys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";

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
            path:'/blogs',
            element:<Blogs/>
        }
      ]
    },
  ]);


  export default router;



