import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";


const Moredetails = () => {
  const productDatas = useLoaderData();
  

  const { name, imageURL, description, brandName, price,  } = productDatas;

 

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={imageURL} alt={name} className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Model:{name}</h2>
          <h2 className="card-title">Brand:{brandName}</h2>
          <h2 className="card-title">Price: ${price}</h2>
          <p>{description}</p>
          <div className="card-actions flex">
          <Link to={"/allproduct"}>
        <button className="flex items-center mt-4 ml-10 btn text-white bg-blue-300"><IoMdArrowRoundBack className="text-2xl"></IoMdArrowRoundBack> Back</button>
        </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moredetails;
