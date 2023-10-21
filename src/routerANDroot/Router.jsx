import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Home from "../page/home/Home";
import AddProduct from "../page/addproduct/AddProduct";
import AllProduct from "../components/allproduct/AllProduct";
import Error from "../components/error/Error";
import Details from "../components/homeCard/Details";
import Moredetails from "../components/moredetails/Moredetails";
import Update from "../page/update/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
        errorElement:<Error></Error>,
        loader: async () => {
          const [productResponse, brandResponse] = await Promise.all([
            fetch("http://localhost:5001/product"),
            fetch("http://localhost:5001/brand"),
          ]);

          const productData = await productResponse.json();
          const brandData = await brandResponse.json();

          return {
            productData,
            brandData,
          };
        },
      },
      {
        path:"/viewdetails/:id",
        element:<Details></Details>,
        loader: ({ params }) => fetch(`http://localhost:5001/product/${params.id}`)
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/allproduct",
        element: <AllProduct></AllProduct>,
        loader: ()=> fetch("http://localhost:5001/product")
      },
      {
        path:"/moredetails/:id",
        element:<Moredetails></Moredetails>,
        loader: ({ params }) => fetch(`http://localhost:5001/product/${params.id}`)
      
      },
      {
        path:"/update/:id",
        element:<Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5001/product/${params.id}`)
      }
    ],
  },
]);

export default router;
