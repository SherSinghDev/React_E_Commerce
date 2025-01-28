import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import allProductsData from '../../data/Data'

function Products({ cartProducts, setCartProducts }) {

    function handleAddToCart(e) {
        let btn = e.target
        let id = btn.getAttribute('data-btn')
        let ifExist = cartProducts.find((product) => {
            return product.id == id
        })

        if (!ifExist) {
            let data = allProductsData.find((product) => {
                return product.id == id
            })

            setCartProducts([...cartProducts, data])
        }
    }

    useEffect(() => {
        allProductsData.forEach((product) => {
            let id = product.id
            let para = document.querySelector(`#para-${id}`)
            let rating = product.ratings
            let star = '<i class="fa-solid fa-star"></i>'
            let allstar = star.repeat(rating)
            para.innerHTML = allstar
        })
    }, [])






    return (
        <>
            <div className="page">
                <div className="page-top">
                    <div className="card">
                        <div className="card-body d-flex align-items-center">
                            Sort by:
                            <select name="" id="" className='form-select ms-3' >
                                <option value="">option1</option>
                                <option value="">option1</option>
                                <option value="">option1</option>
                                <option value="">option1</option>
                                <option value="">option1</option>
                            </select>
                        </div>
                    </div>
                </div>


                <div className="filter-sidebar">
                    <div className="sidebar-content">
                        <div className="categories">
                            <h2 className='mb-3'>CATEGORIES</h2>
                            <p><span>Clothings</span> <span class="badge text-bg-info">42</span></p>
                            <p><span>Sunglasses</span> <span class="badge text-bg-info">62</span></p>
                            <p><span>Bags</span> <span class="badge text-bg-info">421</span></p>
                            <p><span>Watches</span> <span class="badge text-bg-info">402</span></p>
                            <p><span>Furniture</span> <span class="badge text-bg-info">32</span></p>
                            <p><span>Shoes</span> <span class="badge text-bg-info">57</span></p>
                            <p><span>Accessories</span> <span class="badge text-bg-info">39</span></p>
                            <p><span>Headphones</span> <span class="badge text-bg-info">14</span></p>
                        </div>
                        <div className="price mt-4">
                            <hr />
                            <h2 className='mb-2'>PRICE</h2>
                            <input type="range" className='w-100' />
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className="btn btn-info text-white" style={{ fontSize: "14px" }}>FILTER</div>
                                <p className='mt-3'>Price: $200 - $900</p>
                            </div>
                        </div>
                        <div className="colors mt-4">
                            <hr />
                            <h2 className='mb-3'>COLORS</h2>
                            <div className="color-box">
                                <p>Black</p>
                                <p>Yellow</p>
                                <p>Red</p>
                                <p>Blue</p>
                                <p>White</p>
                                <p>Green</p>
                                <p>Sky Blue</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="prooducts-section">
                    <div className="container-fluid">
                        <div className="row g-4">
                            {allProductsData.map((product, i) => {
                                return (
                                    <>
                                        <div className="col-md-3" key={i + 1}>
                                            <Link to={`/productdetail/${product.id}`}>
                                                <div class="card pt-3" >
                                                    <div className='text-center'>
                                                        <img src={product.img} class="card-img-top" alt="..." />
                                                    </div>
                                                    <div class="card-body">
                                                        <p class="card-text mb-1">Category Name</p>
                                                        <h5 class="card-title mt-0">{product.name}</h5>
                                                        <div className="price-rating d-flex justify-content-between mt-3 align-items-center"   >
                                                            <p style={{ fontSize: "20px" }}>{product.price}</p>
                                                            <p className='d-flex gap-1' id={`para-${product.id}`} style={{ color: "orange", fontSize: "13px" }}>

                                                            </p>
                                                        </div>
                                                        <Link to='/' data-btn={product.id} onClick={handleAddToCart} class="btn btn-success w-100"><i class="fa-solid fa-cart-plus me-2"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Products