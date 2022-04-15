import React from "react"
import ProductsList from './views/ProductsList/ProductsList'
import Cart from './views/Cart/Cart'
import CartIcon from './components/CartIcon/CartIcon'
import { Route, Routes } from 'react-router-dom'


function App() {
   return (
      <div className="App">
         <h1>Ambev Shop</h1>
         <CartIcon />
         <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/cart" element={<Cart />} />
         </Routes>
      </div>
   );
}

export default App