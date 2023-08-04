import React from 'react'
import ProductItem from './ProductItem'


const ProductList = (props) => {
    const {kindShoe,handleDetails} = props 
  return (
    <div className='row'>
        {
            kindShoe.map((product) => (
                <ProductItem key={product.id} product={product} handleDetails={handleDetails} />
            ))
        }
    </div>
  )
}

export default ProductList