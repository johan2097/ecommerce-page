import React, { useEffect, useState } from 'react'
import Caracteristicas from '../Caracteristicas'

const Categorias = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://fakestoreapi.com/products/categories')
      const data = await response.json()
      console.log(data, 'data')
      setCategories(data)
    }
    fetchCategories()
  }, [])

  if (categories.length === 0) return <div>Loading.....</div>

  return (
      <Caracteristicas cards={categories}/>
  )
}

export default Categorias