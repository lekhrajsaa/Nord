import { useSelector } from 'react-redux'
import '../css/Wishlist.css'
import WishlistItem from './WishlistItem'

function Wishlist() {

    const wishlist = useSelector(state => state.wishlistReducer.item)
    return (
        <div className='Wishlist'>
            <h1 className='product__heading'>WISH LIST</h1>
            {wishlist.length < 1 && <h1 style={{
                textAlign: "center"
            }}>Wihslist empty !!!</h1>}
            {wishlist?.map(e => <WishlistItem key={e.id} id={e.id} title={e.title} price={e.price} rating={e.rating} img={e.img} />)}
        </div>
    )
}

export default Wishlist