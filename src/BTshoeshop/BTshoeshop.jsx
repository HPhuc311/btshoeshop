import React, {useState} from 'react'
import './style/style.css'
import kindShoe from './data.json'
import ProductList from './ProductList'
import ProductDetails from './ProductDetails'


const BTshoeshop = () => {
  //============detail=============
  const [productDetail, setProductDetail] = useState(kindShoe[0])

  const handleDetails = (product) => {
    setProductDetail(product)
  }

  return (
    <div className='container'>
        <h1>BTShoeShop</h1>
        <ProductList kindShoe={kindShoe} handleDetails={handleDetails} />


        {/* Modal - Details */}
        <ProductDetails productDetail={productDetail} />
    </div>
  )
}

export default BTshoeshop