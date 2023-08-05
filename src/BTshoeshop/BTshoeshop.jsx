import React, {useState} from 'react'
import './style/style.css'
import kindShoe from './data.json'
import ProductList from './ProductList'
import ProductDetails from './ProductDetails'
import Cart from './Cart'


const BTshoeshop = () => {
  //============detail=============
  const [productDetail, setProductDetail] = useState(kindShoe[0])

  const handleDetails = (product) => {
    setProductDetail(product)
  }

  // ==========count product======
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    // Tăng giá trị và cập nhật state
    setCount(count + 1);
  };

  const handleDescrement = (porduct = 1) => {
    setCount(count - porduct);
  }

  // ==========cart=============
  const [carts, setCarts] = useState([]) // tham chiếu #123
    console.log('carts: ', carts)

  const handleCarts = (product) => {
    console.log('product: ', product)
      // setCarts(data)
      setCarts((currentState) => {
          //#123
          //Kiểm tra trong carts đã tồn tại sản phẩm hay chưa
          const index = currentState.findIndex((item) => item.id === product.id)

          if (index !== -1) {
              //SP đã tồn tại trong carts => tăng số lượng của sp đó lên
              currentState[index].cartQuantity += 1
              handleIncrement()
          } else {
              currentState.push({ ...product, cartQuantity: 1 })
              handleIncrement()
          }
          return [...currentState]
      })
  }

  const handleQuantity = (id, quantity) => {
    // quantiy: +1 => button +
    // quantity: -1:  => button -
    setCarts((currentState) => {
        // Tìm kiếm sản phẩm đang muốn tăng giảm số lượng
        const index = currentState.findIndex((item) => item.id === id)

        currentState[index].cartQuantity = currentState[index].cartQuantity + quantity || 1
        return [...currentState]
    })
}

  const handleDelete = (id) => {
  setCarts((currentState) => {
      return currentState.filter((item) => item.id !== id)
  })
}


  return (
    <div className='container py-5'>
        <div className="d-flex justify-content-between positive-relative">
            <h1 className='text-white'>BTShoeShop</h1>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i class="fa-solid fa-cart-shopping"></i> Cart  <span className='cart-number position-absolute'>{count}</span> </button>
        </div>


        <ProductList kindShoe={kindShoe} handleDetails={handleDetails} handleCarts={handleCarts} />


        {/* Modal - Details */}
        <ProductDetails productDetail={productDetail}/>

        {/* Modal - Cart */}

        <Cart carts={carts} handleQuantity={handleQuantity} handleDelete={handleDelete} handleDescrement={handleDescrement} handleIncrement={handleIncrement}></Cart>
    </div>
  )
}

export default BTshoeshop