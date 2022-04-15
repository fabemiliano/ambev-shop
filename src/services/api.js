import axios from 'axios'

const URL = "http://localhost:3000/items"

export const getAllProducts = async () => {
  const { data } = await axios.get(URL)
  return data
}