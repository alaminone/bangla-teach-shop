import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const HomeCard = ({product}) => {
    const {_id,name,imageURL,price,brandName} = product;
    return (
        <div>
        <div className="card card-compact  bg-base-100 shadow-xl">
        <figure className="w-full h-64">
        <img src={imageURL} alt={name} className="w-full h-full" />
      </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Price:${price}</p>
    <p>Brand:{brandName}</p>
    <Link to={`/viewdetails/${_id}`}>
<div className="card-actions ">
    <button className="btn w-full bg-blue-300 text-white">View Details </button>
    </div> 
</Link>
  </div>
</div>

    </div>
    );
};
HomeCard.propTypes = {
    product:PropTypes.object.isRequired,
}
export default HomeCard;

