import React from "react"
import ProductsList from './views/ProductsList/ProductsList'
import Cart from './views/Cart/Cart'

function App() {
   return (
      <div>
      <h1>Ambev Shop</h1>
      <Cart />
      <ProductsList />
      </div>
   )
}

export default App