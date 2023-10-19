import { createBrowserRouter } from "react-router-dom";


import Root from "./Root";
import Home from "../page/home/Home";
import AddProduct from "../page/addproduct/AddProduct";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
          
        },
        {
          path:"/addproduct",
          element:<AddProduct></AddProduct>
        }
     
      ]
    },
  
  ]);

  export default router;