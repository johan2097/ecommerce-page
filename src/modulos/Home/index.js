import React, { useEffect, useState } from 'react';
import Hero from '../../componentes/Hero';
import Producto from '../../componentes/Productos';
import Estatico from '../../componentes/Estatico';
import Categorias from '../../componentes/Categorias';

const Home = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products?limit=12')
            const data = await response.json()
            console.log(data)
            setProducts(data)
        }
        fetchProducts()
    }, [])

    return (
        <div>
            <>
                <Hero />
                <Categorias/>
                <div className="flex flex-col text-center w-full mt-20">
                    <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTOS</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Los Mas Populares</h1>
                </div>
                {
                    products.length > 0 ?
                        <Producto products={products} />
                        :
                        <div>Loading.....</div>
                }
                <Producto />
                <Estatico />
            </>
        </div>
    )
}

export default Home
