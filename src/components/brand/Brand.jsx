import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brand = ({ brand }) => {
  const { brandName, brandLogo, _id } = brand;

  return (
    <div>
      <Link to={`/productsByBrand/${_id}`}>
        <div className="card w-40 h-40 bg-base-100 shadow-xl">
          <figure className="w-full h-40">
            <img className='' src={brandLogo} alt="Shoes" />
          </figure>
          <div className="px-2 py-3">
            <h2 className="card-title">
              {brandName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

Brand.propTypes = {
  brand: PropTypes.object.isRequired
}

export default Brand;
