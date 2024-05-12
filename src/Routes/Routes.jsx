import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import LogIn from "../Pages/AuthenticationPages/LogIn";
import Register from "../Pages/AuthenticationPages/Register";
import AllJobs from "../Components/AllJobs/AllJobs";
import AddJobs from "../Components/AddJobs/AddJobs";
import MyJobs from "../Components/MyJobs/MyJobs";
import Blogs from "../Components/Blogs/Blogs";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>,

        },

        {
          path:'/allJobs',
          element:<AllJobs></AllJobs>
        },
        {
          path:'/addJobs',
          element:<AddJobs></AddJobs>
        },
        {
          path:'/myJobs',
          element:<MyJobs></MyJobs>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>
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