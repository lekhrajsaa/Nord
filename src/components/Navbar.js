import { signInWithPopup, signOut } from "firebase/auth"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { auth, provider } from "../firebase"
import { userLogout } from "../Slices/userSlice"
import '../css/Navbar.css'
import { changeLoad } from "../Slices/loaderSlice"
import toast from "react-hot-toast"
import { removeAllCart } from "../Slices/cartSlice"
import { removeAllWishlist } from "../Slices/wishlistSlice"
function Navbar() {
    const dispatch = useDispatch();
    const handleLogin = async () => {
        try {
            dispatch(changeLoad({
                load: true
            }))
            await signInWithPopup(auth, provider)
            dispatch(changeLoad({
                load: false
            }))
            toast.success("User logged in successfully")
        } catch (error) {
            dispatch(changeLoad({
                load: false
            }))
            toast.error(error.message)
        }
    }

    const handleLogout = async () => {
        try {
            dispatch(changeLoad({
                load: true
            }))
            await signOut(auth)
            dispatch(userLogout())
            dispatch(changeLoad({
                load: false
            }))
            dispatch(removeAllCart())
            dispatch(removeAllWishlist())
            toast.success("User logged out successfully")
        } catch (error) {
            dispatch(changeLoad({
                load: false
            }))
            alert(error.message)
        }
    }

    const handleStyle = ({ isActive }) => {
        if (isActive)
            return {
                color: "var(--color-accent)"
            }
        else
            return {
                color: "white"
            }
    }

    const user = useSelector(state => state.userReducer)
    return (
        <div className="Navbar">
            <NavLink to={'/'} className="navbar__logo" >
                <p>www.aktraders.in</p>
            </NavLink>
            <div className="navbar__items-container" style={!user.uid ? {
                justifyContent: "flex-end"
            } : {
                justifyContent: "space-between"
            }}>
                {user.uid && <>
                    <NavLink to={'/cart'} className='navbar__items' style={handleStyle}>
                        <i className="bi bi-cart-fill"></i>
                        <p>Cart</p>
                    </NavLink>
                    <NavLink to={'/wishlist'} className='navbar__items' style={handleStyle}>
                        <i className="bi bi-heart-fill" ></i>
                        <p>Wishlist</p>
                    </NavLink>
                </>}


                {!user.uid && <button onClick={handleLogin} className="navbar__button" > Login</button>}


                {user.uid && <button onClick={handleLogout} className="navbar__button"
                >Logout</button>}

            </div >
        </div >
    )
}

export default Navbar   