


import PropTypes from 'prop-types'

const CardBrand = ({product}) => {
    const {name,imageURL} = product
  return (
    <div>
        <img src={imageURL} alt="" />
        <h3>{name}</h3>
    </div>
  )
}

CardBrand.propTypes = {
    product:PropTypes.object.isRequired
}

export default CardBrand