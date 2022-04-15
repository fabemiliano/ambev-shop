import { useState, useEffect } from 'react'
import { getAllProducts } from '../../services/api'


function ProductsList() {

  useEffect(() => {
    getAllProducts().then(products => setProducts(products))
  }, [])

  const [products, setProducts] = useState([])

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <div>
        {products.map(e => <h1 key={e.id} >{e.name}</h1>)}
      </div>
    </div>
  )
}

export default ProductsList