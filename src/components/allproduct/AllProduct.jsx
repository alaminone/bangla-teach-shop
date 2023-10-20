import { useLoaderData } from "react-router-dom";
import SinglProduct from "./SinglProduct";


const AllProduct = () => {

    const allproduct = useLoaderData();
    console.log(allproduct)

    const products = allproduct && allproduct.productData;
    

    return (
        <div className="mx-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {
  (products || []).map(product => (
    <SinglProduct key={product._id} product={product} />
  ))
}
            </div>
        </div>
    );
};

export default AllProduct;