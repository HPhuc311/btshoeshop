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
    <div className='container py-5'>
        <div className="d-flex justify-content-between">
            <h1 className='text-white'>BTShoeShop</h1>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#modalCart" aria-controls="offcanvasWithBothOptions">Cart</button>
        </div>


        <ProductList kindShoe={kindShoe} handleDetails={handleDetails} />


        {/* Modal - Details */}
        <ProductDetails productDetail={productDetail}/>
    </div>
  )
}

export default BTshoeshop