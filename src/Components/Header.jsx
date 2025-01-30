import React from 'react'
import { Link } from 'react-router-dom'
import allProductsData from '../data/Data'


function Header({ cartProducts }) {
    let products = cartProducts.length

    function themeChanger(e) {
        document.querySelector("body").classList.toggle("light")
        let label = e.target.nextElementSibling

        if (label.innerText == "Light Mode") {
            label.innerText = "Dark Mode"
        }
        else {
            label.innerText = "Light Mode"
        }
    }

    function handleSearch(e) {
        let box = document.querySelector('.search-product-box')
        if (e.target.value == '') {
            box.style.display = 'none'
        }
        else {
            box.style.display = 'block'
        }
        let inputValue = e.target.value
        console.log(inputValue);
        let headings = document.querySelectorAll(".listed-products h4")
        headings.forEach((head) => {
            console.log(head.innerText);
            if (head.innerText.toLowerCase().includes(inputValue.toLowerCase())) {
                head.style.display = 'block'
            }
            else {

                head.style.display = 'none'
            }
        })
    }
    function clearSeacrhBox() {
        let box = document.querySelector('.search-product-box')
        box.style.display = 'none'
        document.querySelector("#main-search").value = ''
    }
    return (
        <>
            <header>
                <div className="navbar">
                    <Link to='/'><div className="logo"><span>E</span>Company</div></Link>
                    <div className="top-search-box">
                        <div className="btn-group">
                            <button type="button" className="btn btn-secondary dropdown-toggle filter-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                All
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>
                        <input type="text" name="" onKeyUp={handleSearch} className='border border-dark' id="main-search" placeholder='Search Your Favourite Product' />
                        <button className='btn btn-primary px-3 search-btn'><i className="fa-solid fa-magnifying-glass"></i></button>

                    </div>
                    <div className="cart-btn position-relative">
                        {products ? <span class="badge text-bg-danger text-white position-absolute" style={{ fontSize: "10px", left: "10px" }}>{products}</span> : ""}
                        <Link to='/cart'><i className="fa-solid fa-cart-shopping me-2"></i> Cart</Link>
                    </div>

                    <div className="form-check form-switch theme-changer">
                        <input className="form-check-input" onClick={themeChanger} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                </div>

            </header>

            <div className="search-product-box">
                <h2>Products</h2>
                <div className="listed-products mt-3">
                    {allProductsData.map((product) => {
                        return <Link to={`/productdetail/${product.id}`} onClick={clearSeacrhBox}><h4>{product.name}</h4></Link>
                    })}
                </div>
            </div>
        </>
    )
}

export default Header