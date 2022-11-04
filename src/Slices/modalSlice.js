import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    load: false
}

const modalSlice = createSlice({
    name: 'modalReducer',
    initialState,
    reducers: {
        changeModal(state, action) {
            state.load = action.payload.load
        }
    }
});

export const { changeModal } = modalSlice.actions

export default modalSlice.reducer