import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    load: false
}

const loaderSlice = createSlice({
    name: 'loaderReducer',
    initialState,
    reducers: {
        changeLoad(state, action) {
            state.load = action.payload.load;
        }
    }
});

export const { changeLoad } = loaderSlice.actions

export default loaderSlice.reducer