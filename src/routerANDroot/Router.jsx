import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Home from "../page/home/Home";
import AddProduct from "../page/addproduct/AddProduct";
import AllProduct from "../components/allproduct/AllProduct";
import Error from "../components/error/Error";
import Details from "../components/homeCard/Details";
import Moredetails from "../components/moredetails/Moredetails";
import Update from "../page/update/Update";
import ProductByBrand from "../page/productbybrand/ProductByBrand";
import Login from "../page/login/Login";
import Regester from "../page/regester/Regester";
import PrivetRout from "../components/privetrout/PrivetRout";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
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
        element:<PrivetRout><Details></Details></PrivetRout>,
        loader: ({ params }) => fetch(`http://localhost:5001/product/${params.id}`)
      },
      {
        path: "/addproduct",
        element: <PrivetRout><AddProduct></AddProduct></PrivetRout>,
      },
      {
        path: "/allproduct",
        element: <PrivetRout><AllProduct></AllProduct></PrivetRout>,
        loader: ()=> fetch("http://localhost:5001/product")
      },
      {
        path:"/moredetails/:id",
        element:<Moredetails></Moredetails>,
        loader: ({ params }) => fetch(`http://localhost:5001/product/${params.id}`)
      
      },
      {
        path:"/update/:id",
        element:<PrivetRout><Update></Update></PrivetRout>,
        loader: ({ params }) => fetch(`http://localhost:5001/product/${params.id}`)
      },
      {
        path: "/productsByBrand/:brandId",
        element: <PrivetRout><ProductByBrand></ProductByBrand></PrivetRout>,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/productsByBrand/${params.brandId}`), 
      },
     {
      path:"/login",
      element:<Login></Login>
     },
     {
      path:"/regester",
      element:<Regester></Regester>
     }
    
    ],
  },
]);

export default router;
