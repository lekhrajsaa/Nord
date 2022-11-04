import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    item: []
}

const cartSlice = createSlice({
    name: 'cartReducer',
    initialState,
    reducers: {
        addToCart(state, action) {
            const index = state.item.findIndex((e) => {
                return e.id == action.payload.id
            })

            if (index >= 0) {
                state.item[index].qty += 1;
            }
            else {
                state.item.push({
                    ...action.payload,
                    qty: 1
                })
            }
        },
        removeFromCart(state, action) {
            const index = state.item.findIndex((e) => {
                return e.id == action.payload.id
            })
            if (index >= 0) {
                if (state.item[index].qty > 1) {
                    console.log("removing qty")
                    state.item[index].qty -= 1
                }
                else { state.item.splice(index, 1) }
            }

        },
        removeAllCart(state, action) {
            state.item = []
        }
    }

});

export const { addToCart, removeFromCart, removeAllCart } = cartSlice.actions

export default cartSlice.reducer