
import PropTypes from 'prop-types'

const Brand = ({brand}) => {

    const {brandName,brandLogo} = brand;

  return (
    <div>

<div className="card w-40 h-40 bg-base-100 shadow-xl">
  <figure className="w-full h-40"><img className='' src={brandLogo} alt="Shoes" /></figure>
  <div className=" px-2 py-3">
    <h2 className="card-title">
      {brandName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
   </div>
</div>

    </div>
  )
}

Brand.propTypes = {
    brand:PropTypes.object.isRequired
}

export default Brand