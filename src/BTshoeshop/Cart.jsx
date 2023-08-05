import React from 'react'

const Cart = ({carts,handleQuantity,handleDelete, handleDescrement,handleIncrement}) => {
  return (
    <div>
     <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header  border-bottom border-primary-subtle">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Chi tiết giỏ hàng</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
      <div className="offcanvas-body">
      {carts.length ? (
                          <div>
                              {carts.map((cart, index) => {
                                  return (
                                     <div className='row py-4 border-bottom  border-success' key={cart.id}>
                                        <div className="col-4">
                                            <img style={{width: 100, height: 100}} className='img-fluid' src={cart.image} alt="..." />
                                        </div>
                                        <div className="col-8">
                                          <p>{index + 1} {cart.name}</p>
                                          <p>{cart.cartQuantity * cart.price}$</p>
                                          <div className="d-flex align-items-center">
                                            <button className='btn btn-outline-success d-flex justify-content-center align-items-center' style={{width: 25, height: 25}} onClick={() => {handleQuantity(cart.id,1)
                                               handleIncrement()}}>+</button>
                                            <span className='' style={{width: 25, height: 25}}>{cart.cartQuantity}</span>
                                            <button className='btn btn-outline-success d-flex justify-content-center align-items-center' style={{width: 25, height: 25}} onClick={() => {handleQuantity(cart.id,-1)
                                              handleDescrement()
                                            }}>-</button>
                                          </div>
                                          <div className="">
                                            <p style={{cursor: 'pointer'}} onClick={() => {
                                              handleDescrement(cart.cartQuantity)
                                              handleDelete(cart.id)
                                            }}><i class="fa-solid fa-trash"></i></p>
                                          </div>
                                        </div>
                                     </div>
                                  )
                              })}
                          </div>
                        ):(
                          <h2 className='text-center'>Vui lòng chọn sản phẩm</h2>
                        )}
      </div>
    </div>
  </div>
  )
}

export default Cart