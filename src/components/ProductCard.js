import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import '../css/ProductCard.css'
import { addToCart } from '../Slices/cartSlice';
import { changeModal } from '../Slices/modalSlice';
import { addToWishlist, removeFromWishlist } from '../Slices/wishlistSlice';
function ProductCard({ title, rating, img, price, id }) {
    const [like, setLike] = useState(false)
    const wishlist = useSelector(state => state.wishlistReducer.item)
    const cart = useSelector(state => state.cartReducer.item)
    const user = useSelector(state => state.userReducer.uid)
    useEffect(() => {
        if (wishlist.findIndex(e => e.id === id) >= 0) {
            setLike(true)
        }
        else {
            setLike(false)
        }
    }, [wishlist])

    const dispatch = useDispatch();

    const handleWishlist = () => {
        if (user) {
            if (!like) {
                dispatch(addToWishlist({
                    id,
                    title,
                    rating,
                    img,
                    price
                }))
                toast.success('Item added to wishlist', {
                    duration: 800,
                    id: "clipboard"
                })
            }

            else {
                dispatch(removeFromWishlist({
                    title,
                    rating,
                    img,
                    price,
                    id
                }))
                toast.error('Item removed from wishlist', {
                    duration: 800
                })
            }
        }
        else {
            dispatch(changeModal({
                load: true
            }))
        }

    }


    const handleCart = () => {
        if (user) {

            dispatch(addToCart({
                title,
                rating,
                img,
                price,
                id
            }))
            toast.success('Item added to Cart', {
                duration: 800,

            })

        }
        else {
            dispatch(changeModal({
                load: true
            }))
        }

    }

    return (
        <div className='ProductCard'>
            <div className='productCard__wishlist' onClick={handleWishlist}>
                {like ? <i className="bi bi-heart-fill" style={{ color: "red" }}></i> : <i className="bi bi-heart"></i>}
            </div>
            <div className='productCard__img'>
                <img src={img} alt="" />
            </div>
            <div className='productCard__details'>
                <h3>{title}</h3>
                <h3>${price}</h3>
                <div>

                    {Array(Math.floor(rating)).fill().map(e => <i key={Math.random()} className="bi bi-star-fill" ></i>)}
                </div>
                <div className='productCard__button'>

                    <button onClick={handleCart}>Add to Cart</button>

                </div>
            </div>
        </div>
    )
}

export default ProductCard