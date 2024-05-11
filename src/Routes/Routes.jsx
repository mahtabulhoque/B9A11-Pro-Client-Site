import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import LogIn from "../Pages/AuthenticationPages/LogIn";
import Register from "../Pages/AuthenticationPages/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>

        },
        {
            path:'/logIn',
            element: <LogIn></LogIn>

        },
        {
            path:'/register',
            element:<Register></Register>

        },
      ]
    },
  ]);

  export default router;