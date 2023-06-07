import React, { useEffect, useState } from 'react'
import Categorias from '../../componentes/Categorias'
import Productos from '../../componentes/Productos'

const ProductosAd = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <div>
      <Categorias/>
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTOS</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">TODOS LOS PRODUCTOS</h1>
      </div>
      {
        products.length > 0 ?
        <Productos products={products}/>
        :
        <div>Cargando.....</div>
      }
    </div>
  )
}

export default ProductosAd