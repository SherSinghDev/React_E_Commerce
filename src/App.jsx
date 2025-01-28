import React, { useState } from 'react'
import Header from './Components/Header'
import "./App.css"
import Products from './Components/pages/Products'
import ProductDetails from './Components/pages/ProductDetails'
import Cart from './Components/pages/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  let [cartProducts, setCartProducts] = useState([])
  return (
    <>
      <BrowserRouter>
        <Header cartProducts={cartProducts} />
        <Routes>
          <Route path='/' element={<Products setCartProducts={setCartProducts} cartProducts={cartProducts} />} />
          <Route path='/productdetail/:id' element={<ProductDetails setCartProducts={setCartProducts} cartProducts={cartProducts} />} />
          <Route path='/cart' element={<Cart cartProducts={cartProducts} setCartProducts={setCartProducts} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App