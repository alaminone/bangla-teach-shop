

import { useLoaderData } from "react-router-dom";

import Footer from "../../components/footer/Footer";
import NavBar from "../../components/nav/NavBar";
import Bannar from "../../components/nav/bannar/Bannar";
import { useState } from "react";
import SinglProduct from "../../components/allproduct/SinglProduct";



const Home = () => {
  const allproduct = useLoaderData();

  const [isShow, setIsShow]= useState(false);

    
    return (
        <div className="mx-5">
          <NavBar></NavBar>
          <Bannar></Bannar>
        <div className="my-10">
          <h3 className="text-4xl font-bold text-center">
            Our <span className="text-blue-300"> Product</span>
          </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {
         isShow ? allproduct?.map(product => <SinglProduct key={product._id}
          product={product}
          ></SinglProduct>)
          :
          allproduct?.slice(0,6).map(product => <SinglProduct key={product._id}
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
   
         
          <Footer></Footer>
        </div>
    );
};

export default Home;