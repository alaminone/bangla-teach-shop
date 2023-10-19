import { createBrowserRouter } from "react-router-dom";


import Root from "./Root";
import Home from "../page/home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/home",
            element:<Home></Home>
          
        },
     
      ]
    },
  
  ]);

  export default router;