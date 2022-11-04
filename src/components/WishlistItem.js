import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import '../css/WishlistItem.css'
import { addToCart, removeFromCart } from '../Slices/cartSlice'
import { removeFromWishlist } from '../Slices/wishlistSlice'
function WishlistItem({ img, title, price, rating, isCart, id, qty }) {
    const dispatch = useDispatch()

    const cartHandler = () => {
        dispatch(addToCart({
            id, img, title, price, rating
        }))
        toast.success("Added to Cart", {
            duration: 800
        })
    }

    const cartRemove = () => {
        dispatch(removeFromCart({
            id
        }))
        toast.error("Removed from cart", {
            duration: 800,
            id: 'clipboard'
        })
    }

    const wishListHandler = () => {
        dispatch(removeFromWishlist({
            id
        }))
        toast.error("Removed from wishlist", {
            duration: 800,
            id: 'clipboard'

        })
    }
    return (
        <div className='WishlistItem'>
            <div className='wishlistItem__img'>
                <img src={img} alt="" />
            </div>
            <div className='wishlistItem__details'>
                <p>{title}</p>
                <p>${price}</p>
                <div>
                    {Array(Math.floor(rating)).fill().map(e => <i key={Math.random()} className="bi bi-star-fill" ></i>)}
                </div>
                {qty && <p style={{ fontWeight: 'bold' }}>Qty: {qty}</p>}
            </div>

            {isCart ? <div className='wishlistItem__button'>

                <button onClick={cartRemove}>Remove from Cart</button>

            </div> : <div className='wishlistItem__button'>

                <button onClick={cartHandler}>Add to Cart</button>
                <button onClick={wishListHandler}>Remove form wishlist</button>

            </div>}

        </div>
    )
}

export default WishlistItem 