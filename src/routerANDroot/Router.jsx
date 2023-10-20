import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Home from "../page/home/Home";
import AddProduct from "../page/addproduct/AddProduct";
import AllProduct from "../components/allproduct/AllProduct";
import Error from "../components/error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: "/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/allproduct",
        element: <AllProduct></AllProduct>,
        loader: ()=> fetch("http://localhost:5001/product")
      },
    ],
  },
]);

export default router;
