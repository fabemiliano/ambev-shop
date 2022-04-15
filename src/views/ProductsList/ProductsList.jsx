import React from 'react'
import { useState, useEffect } from 'react'
import { getAllProducts } from '../../services/api'
import styles from './ProductsList.module.scss'

function checkIfImageIsValid(items) {
  return items.reduce((acc, e) => {
    const a = document.createElement('img')
    a.src = e.image
    return (a.height !== 0) ? [...acc, e] : acc
  }, [])
}

let discountOverFiften;
let discount;

function calculaDesconto(valorInicial, valorFinal) {
  discount = ((1 - valorFinal / valorInicial) * 100).toFixed(0)
  discountOverFiften = discount > 15;
  return discount
}

function addToCart(productId, packageId) {
  const obj = {
    productId,
    packageId,
    quantity: 0
  }
  localStorage.setItem('cart', obj)
}

function renderOptions(e, el) {
  return (
    <div className={styles.prices}>
      <div className={styles.unities}>
        <h2>{el.unities}</h2>
        <p>unidades</p>
      </div>
      <div className={styles.unities_price}>
        <p>De: R${Number(el.original_price).toFixed(2)}</p>
        <p>Por: R${Number(el.current_price).toFixed(2)}</p>
        <p>Desc: {calculaDesconto(el.original_price, el.current_price)}%</p>
        {discountOverFiften && <p>descontão{discount}</p>}
        <button onClick={() => addToCart(e.id, el.id)}>Adicionar ao carrinho</button>
      </div>
    </div>
  )
}

function ProductsList() {

  useEffect(() => {
    getAllProducts().then((items) => {
      const validItems = checkIfImageIsValid(items)
      setProducts(validItems)
    })
  }, [])

  const [products, setProducts] = useState([])

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <div className={styles.container} >
        {products.map((e) =>
          <div key={e.id} >
            <div className={styles.product} >
              <p >{e.name}</p>
              <img src={e.image} />
              <p>{e.status}</p>
              <div className={styles.prices}>
                {e.packs.map(el =>
                  renderOptions(e, el)
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

  )
}

export default ProductsList