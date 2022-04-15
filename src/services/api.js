import axios from 'axios'

const URL = "http://localhost:3000/items"

export const getAllProducts = async () => {
  const products = await axios.get(URL)
  return products
}