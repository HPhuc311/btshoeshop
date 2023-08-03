import React from 'react'
import ProductItem from './ProductItem'


const ProductList = (props) => {
    const {kindShoe} = props 
  return (
    <div className='row'>
        {
            kindShoe.map((product) => (
                <ProductItem key={product.id} product={product}/>
            ))
        }
    </div>
  )
}

export default ProductList