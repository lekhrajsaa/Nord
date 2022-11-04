import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    item: []
}

const wishlistSlice = createSlice({
    name: 'wishlistSlice',
    initialState,
    reducers: {
        addToWishlist(state, action) {
            state.item.push({
                ...action.payload
            })
            console.log("added")
        },
        removeFromWishlist(state, action) {
            const index = state.item.findIndex((e) => {
                return e.id === action.payload.id
            })
            state.item.splice(index, 1)
        },
        removeAllWishlist(state) {
            state.item = []
        }
    }
});

export const { addToWishlist, removeFromWishlist, removeAllWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer    