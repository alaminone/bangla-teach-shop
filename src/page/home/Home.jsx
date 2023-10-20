

import { useLoaderData } from "react-router-dom";


import Bannar from "../../components/nav/bannar/Bannar";
import { useState } from "react";
import SinglProduct from "../../components/allproduct/SinglProduct";
import Brand from "../../components/brand/Brand";



const Home = () => {
  const allproduct = useLoaderData();
  const products = allproduct && allproduct.productData;


  const allBrand = useLoaderData();
  const brands = allBrand && allproduct.brandData;

  const [isShow, setIsShow]= useState(false);

    
    return (
        <div className="mx-5 ">
     
          <Bannar></Bannar>
      {/* brand slide */}
      <h3 className="text-4xl font-bold text-center my-10">
          Is With Us
        </h3>
      <div className="flex justify-center items-center">
        
        <div className="grid grid-cols-2 md:grid-cols-3 my-0 gap-4 ">
          {
            brands.map(brand => <Brand
               key={brand._id}
               brand={brand}
               ></Brand>)
          }
        </div>
      </div>

      {/* product */}


        <div className="my-10">
          <h3 className="text-4xl font-bold text-center">
            Our <span className="text-blue-300"> Product</span>
          </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {
         isShow ? products?.map(product => <SinglProduct key={product._id}
          product={product}
          ></SinglProduct>)
          :
          products?.slice(0,6).map(product => <SinglProduct key={product._id}
            product={product}
            ></SinglProduct>)
        }
    
      </div>
      <div className="flex justify-end my-5 ">
    <button onClick={() => setIsShow(!isShow)} className="btn bg-blue-300">
          {isShow ? "Show Less" : "Show All"}
        </button>
    </div>
        </div>
   
         
          
        </div>
    );
};

export default Home;