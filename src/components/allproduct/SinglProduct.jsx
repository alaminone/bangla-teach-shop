
import PropTypes from 'prop-types'

const SinglProduct = ({product}) => {

    const {name,imageURL,} = product;
  return (
    <div>
        <div className="card card-compact  bg-base-100 shadow-xl">
        <figure className="w-full h-64"> {/* Set a fixed width and height for the image */}
        <img src={imageURL} alt={name} className="w-full h-full" />
      </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p></p>
    <div className="card-actions ">
      <button className="btn w-full bg-blue-300 text-white"></button>
    </div>
  </div>
</div>
    </div>
  )
}

SinglProduct.propTypes = {
    product:PropTypes.object.isRequired,
}

export default SinglProduct