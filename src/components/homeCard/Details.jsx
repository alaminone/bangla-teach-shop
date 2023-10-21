
import { useLoaderData,  } from "react-router-dom";

const Details = () => {
  const productData = useLoaderData();

  if (!productData) {
    return <div><span className="loading loading-bars loading-lg"></span></div>;
  }

  const { name, imageURL,description,brandName ,price} = productData;

 

  return (
  <div>
   <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={imageURL} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{name}</h2>
    <h2 className="card-title">{brandName}</h2>
    <h2 className="card-title">${price}</h2>
    <p>{description}</p>
    <div className="card-actions">
      <button className="btn bg-blue-300 text-white w-full">Add To card</button>
    </div>
  </div>
</div>
  </div>
  );
};

export default Details;
