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
            fetch("https://bangla-tech-server-f9yna5i0a-alamins-projects-be4aa773.vercel.app/product"),
            fetch("https://bangla-tech-server-f9yna5i0a-alamins-projects-be4aa773.vercel.app/brand"),
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
        loader: ({ params }) => fetch(`https://bangla-tech-server-f9yna5i0a-alamins-projects-be4aa773.vercel.app/product/${params.id}`)
      },
      {
        path: "/addproduct",
        element: <PrivetRout><AddProduct></AddProduct></PrivetRout>,
      },
      {
        path: "/allproduct",
        element: <PrivetRout><AllProduct></AllProduct></PrivetRout>,
        loader: ()=> fetch("https://bangla-tech-server-f9yna5i0a-alamins-projects-be4aa773.vercel.app/product")
      },
      {
        path:"/moredetails/:id",
        element:<Moredetails></Moredetails>,
        loader: ({ params }) => fetch(`https://bangla-tech-server-f9yna5i0a-alamins-projects-be4aa773.vercel.app/product/${params.id}`)
      
      },
      {
        path:"/update/:id",
        element:<PrivetRout><Update></Update></PrivetRout>,
        loader: ({ params }) => fetch(`https://bangla-tech-server-f9yna5i0a-alamins-projects-be4aa773.vercel.app/product/${params.id}`)
      },
      {
        path: "/productsByBrand/:brandId",
        element: <PrivetRout><ProductByBrand></ProductByBrand></PrivetRout>,
        loader: ({ params }) =>
          fetch(`https://bangla-tech-server-f9yna5i0a-alamins-projects-be4aa773.vercel.app/productsByBrand/${params.brandId}`), 
      },
     {
      path:"/login",
      element:<Login></Login>
     },
     {
      path:"/regester",
      element:<Regester></Regester>
     },
     {
      path:"/addtocart",
      element:<PrivetRout>
      
      </PrivetRout>
     },
     {
      path:"/dasbord",
      element:<PrivetRout></PrivetRout>
     },
     {
      path:"/about",
      element:<PrivetRout></PrivetRout>
    
     }
    
    ],
  },
]);

export default router;
