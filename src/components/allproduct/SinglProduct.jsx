import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SinglProduct = ({ product }) => {
  const { _id, name, imageURL, price, brandName } = product;
  const [productData, setProductData] = useState(product);

  const handleDelete = () => {
    Swal.fire({
      title: 'Confirm Deletion',
      text: `Are you sure you want to delete the product "${name}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5001/product/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'The product has been deleted.', 'success');
              const updatedProductData = productData.filter((p) => p._id !== _id);
              setProductData(updatedProductData);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure className="w-full h-64">
          <img src={imageURL} alt={name} className="w-full h-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price}</p>
          <p>Brand: {brandName}</p>
          <div className="card-actions">
            <div>
              <Link to={`/moredetails/${_id}`}>
                <button className="btn w-full bg-blue-300 text-white">View Details</button>
              </Link>
            </div>
            <div>
              <button onClick={handleDelete} className="btn w-full bg-blue-300 text-white">Delete</button>
            </div>
            <div>
              <Link to={`/update/${_id}`}>
                <button className="btn w-full bg-blue-300 text-white">Edit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SinglProduct.propTypes = {
  product: PropTypes.object.isRequired,
};

export default SinglProduct;
