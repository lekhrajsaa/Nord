import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Slices/userSlice'
import wishlistReducer from '../Slices/wishlistSlice'
import cartReducer from '../Slices/cartSlice'
import loaderReducer from '../Slices/loaderSlice'
import modalReducer from '../Slices/modalSlice'
export default configureStore({
    reducer: {
        userReducer,
        wishlistReducer,
        cartReducer,
        loaderReducer,
        modalReducer
    }
})