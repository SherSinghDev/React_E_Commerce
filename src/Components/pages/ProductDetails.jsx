import React from 'react'
import { useParams } from 'react-router-dom'
import allProductsData from '../../data/Data';



function ProductDetails() {
    let params = useParams()
    // console.log(params);

    let productData = allProductsData.find((product) => {
        return product.id == params.id
    })

    console.log(productData);
    
    return (
        <>
            <div className="page">
                <div className="card product-deatils" style={{ width: '90%', marginInline: "auto" }}>
                    <div className="card-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4 text-center p-4">
                                    <img src={productData.img}style={{ width: "100%",borderRadius:"4px" }} alt="" />
                                </div>
                                <div className="col-md-7  p-4 ps-5">
                                    <div className="detail-content">
                                        <h2>{productData.name}</h2>
                                        <p className='d-flex gap-1 mt-3' style={{ color: "orange", fontSize: "13px" }}>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <span>(24 ratings)</span>
                                        </p>
                                        <p style={{ fontSize: "40px" }}>{productData.price}</p>
                                        <h2 style={{ fontSize: "18px" }}>Discription :</h2>
                                        <p>{productData.description}</p>
                                        <p className="product-id my-4 d-flex" style={{ gap: "90px" }}>
                                            <span><b>Product id</b></span>
                                            <span style={{ fontSize: "15px" }}>#BHU{productData.id}</span>
                                        </p>

                                        <div className="product-filter d-flex gap-5 mb-5">
                                            <div className="quantity d-flex flex-column">
                                                <label htmlFor="quantity">Quantity</label>
                                                <select name="" className='form-select py-0' id="quantity" style={{ width: "60px" }}>
                                                    <option value="">1</option>
                                                    <option value="">2</option>
                                                    <option value="">3</option>
                                                    <option value="">4</option>
                                                    <option value="">5</option>
                                                </select>
                                            </div>
                                            <div className="size d-flex flex-column">
                                                <label htmlFor="size">Size</label>
                                                <select name="" className='form-select py-0' id="size" style={{ width: "60px" }}>
                                                    <option value="">S</option>
                                                    <option value="">M</option>
                                                    <option value="">L</option>
                                                    <option value="">XS</option>
                                                    <option value="">XL</option>
                                                </select>
                                            </div>
                                            <div className="product-colors-box">
                                                <label htmlFor="">Colors</label>
                                                <div className="product-colors mt-1">
                                                    <span></span><span></span><span></span><span></span>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" class="btn btn-success px-4"><i class="fa-solid fa-cart-plus me-2"></i> Add to cart</a>
                                        <a href="#" class="btn btn-secondary px-4 ms-3"><i class="fa-solid fa-heart me-2"></i> Add to Wishlist</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-reviews mt-4">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="reviews">
                                            <h2>Reviews For The Product</h2>
                                            <div className="review d-flex gap-3 mt-4">
                                                <img src="https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg" className='mt-3' alt="" />
                                                <div className="review-content">
                                                    <p className='d-flex gap-1 mt-3' style={{ color: "orange", fontSize: "13px" }}>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                    </p>
                                                    <h4><span><b>James Caviness</b></span> <span style={{ fontSize: '16px' }}>February 16, 2021</span></h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptas assumenda aspernatur corrupti nihil vero deserunt quod ducimus quia dolor.</p>
                                                </div>
                                            </div>
                                            <div className="review d-flex gap-3">
                                                <img src="https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg" className='mt-3' alt="" />
                                                <div className="review-content">
                                                    <p className='d-flex gap-1 mt-3' style={{ color: "orange", fontSize: "13px" }}>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                    </p>
                                                    <h4><span><b>James Caviness</b></span> <span style={{ fontSize: '16px' }}>February 16, 2021</span></h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptas assumenda aspernatur corrupti nihil vero deserunt quod ducimus quia dolor.</p>
                                                </div>
                                            </div>
                                            <div className="review d-flex gap-3">
                                                <img src="https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg" className='mt-3' alt="" />
                                                <div className="review-content">
                                                    <p className='d-flex gap-1 mt-3' style={{ color: "orange", fontSize: "13px" }}>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                    </p>
                                                    <h4><span><b>James Caviness</b></span> <span style={{ fontSize: '16px' }}>February 16, 2021</span></h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptas assumenda aspernatur corrupti nihil vero deserunt quod ducimus quia dolor.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div class="add-review">
                                            <div class="form-body p-3 rounded">
                                                <h5 class="mb-4">Write a Review</h5>
                                                <div class="mb-3">
                                                    <label class="form-label">Your Name</label>
                                                    <input type="text" class="form-control" />
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Your Email</label>
                                                    <input type="text" class="form-control" />
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Rating</label>
                                                    <select class="form-select">
                                                        <option selected="">Choose Rating</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="3">4</option>
                                                        <option value="3">5</option>
                                                    </select>
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Example textarea</label>
                                                    <textarea class="form-control" rows="3"></textarea>
                                                </div>
                                                <div class="d-grid">
                                                    <button type="button" class="btn btn-primary btn-ecomm">Submit a Review</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails