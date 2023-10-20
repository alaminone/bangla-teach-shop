import { createBrowserRouter } from "react-router-dom";


import Root from "./Root";
import Home from "../page/home/Home";
import AddProduct from "../page/addproduct/AddProduct";
import AllProduct from "../components/allproduct/AllProduct";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=> fetch("http://localhost:5001/product")
          
        },
        {
          path:"/addproduct",
          element:<AddProduct></AddProduct>
        },
        {
          path:"/allproduct",
          element:<AllProduct></AllProduct>,
          loader:()=> fetch("http://localhost:5001/product")
        }
     
      ]
    },
  
  ]);

  export default router;