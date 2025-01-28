import React, { useEffect, useState } from 'react'

function Cart({ cartProducts, setCartProducts }) {
    let [total, setTotal] = useState(0)
    let [tax, setTax] = useState(0)

    useEffect(() => {
        let price = 0
        cartProducts.forEach((product) => {
            console.log(product.price.slice(1,))
            price += +product.price.slice(1,)
        })

        setTotal(price)
        let presentTax = price * (28 / 100)
        setTax(presentTax)
    }, [cartProducts])


    function handleDelete(e) {
        let id = +e.target.getAttribute("data-id")
        let newProducts = cartProducts.filter((product) => {
            return product.id != id
        })
        setCartProducts(newProducts)
    }

    return (
        <div className="page">
            <div className="cart-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="cart-products border-with-radius d-flex flex-column gap-4 p-4">
                                {cartProducts.map((product) => {
                                    return (
                                        <>
                                            <div className="cart-product border-with-radius p-3 d-flex gap-4">
                                                <img src={product.img} alt="" />
                                                <div className="cart-product-content">
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <h4>{product.name}</h4>
                                                                <p className='m-0'>Size: Regular</p>
                                                                <p>Color: White & Blue</p>
                                                                <h4>{product.price}</h4>
                                                            </div>
                                                            <div className="col-md-6 d-flex gap-3 align-items-center">
                                                                <input type="number" className='form-control' style={{ width: "200px" }} placeholder='1' />
                                                                <button data-id={product.id} onClick={handleDelete} className="btn btn-info text-white"> <i className="fa-regular fa-circle-xmark me-2"></i>Remove</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="total-price-box border-with-radius p-3">
                                <div className="discount-code border-with-radius p-3">
                                    <h4>Apply Discount Code</h4>
                                    <div className="discount-input d-flex mt-3">
                                        <input type="text" className='form-control' placeholder='Enter discount code' name="" id="" />
                                        <button className='btn btn-success'>Apply</button>
                                    </div>
                                </div>
                                <div className="estimated border-with-radius mt-3 p-3">
                                    <h4>Estimate Shipping and Tax</h4>
                                    <hr />
                                    <div className="estimated-form">
                                        <label htmlFor="inputState" className="form-label">Country Name</label>
                                        <select id="inputState" className="form-select">
                                            <option>Choose...</option>
                                            <option>India</option>
                                            <option>USA</option>
                                        </select>
                                        <label htmlFor="inputState" className="form-label mt-3">State/Province</label>
                                        <select id="inputState" className="form-select">
                                            <option>Choose...</option>
                                            <option>UP</option>
                                            <option>Bihar</option>
                                        </select>
                                        <label htmlFor="inputZip" className="form-label mt-3">Zip/Postal Code</label>
                                        <input type="text" className="form-control" id="inputZip"></input>
                                    </div>
                                </div>
                                <div className="total-price border-with-radius mt-3 p-3">
                                    <p><span>Subtotal:</span><span>${total}</span></p>
                                    <p><span>Shipping:</span><span>--</span></p>
                                    <p><span>Taxes:</span><span>${tax}</span></p>
                                    <p><span>Discount:</span><span>--</span></p>
                                    <hr />
                                    <h4 className='my-3 d-flex justify-content-between'><span>Order Total:</span> <span>${total + tax}</span></h4>
                                    <button className="btn btn-primary w-100">Proceed to Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart