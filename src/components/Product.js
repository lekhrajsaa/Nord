import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import '../css/Product.css'
import { changeLoad } from '../Slices/loaderSlice'
import ProductCard from './ProductCard'

function Product() {
    const dispatch = useDispatch()
    useEffect(() => {
        const getData = async () => {
            try {
                dispatch(changeLoad({
                    load: true
                }))
                const result = await axios('https://fakestoreapi.com/products');
                setItem(result.data)
                dispatch(changeLoad({
                    load: false
                }))
            } catch (error) {
                dispatch(changeLoad({
                    load: false
                }))
                toast.error(error.message, {
                    id: "clipboard"
                })
            }

        }
        getData();

    }, [])

    const [item, setItem] = useState([])
    return (
        <div className='Product'>

            <h1 className='product__heading'>PRODUCTS</h1>
            <div className='product__grid'>
                {item.map(e =>
                    <ProductCard key={e.id} id={e.id} title={e.title} rating={e.rating.rate} img={e.image} price={e.price} />
                )}
            </div>
        </div>

    )
}

export default Product