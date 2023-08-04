import React from 'react'
import ProductItem from './ProductItem'


const ProductList = (props) => {
    const {kindShoe,handleDetails,handleCarts} = props 
  return (
    <div className='row'>
        {
            kindShoe.map((product) => (
                <ProductItem key={product.id} product={product} handleDetails={handleDetails} handleCarts={handleCarts}/>
            ))
        }
    </div>
  )
}

export default ProductList