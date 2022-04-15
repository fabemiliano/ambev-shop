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
              <img src={e.image}/>
            </div>
          </div>
        )}
      </div>
    </div>

  )
}

export default ProductsList