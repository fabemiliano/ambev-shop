import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../../assets/basket1.png'
function CartIcon() {
  return (
    <Link to="/cart"><img width="50px" src={cart} /></Link>
  )
}

export default CartIcon