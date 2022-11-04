import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    userName: null,
    uid: null,

}

const userSlice = createSlice({
    name: "userReducer",
    initialState,
    reducers: {
        userLogin(state, action) {
            state.uid = action.payload.uid;
            state.userName = action.payload.userName;
        },
        userLogout(state) {
            state.uid = null;
            state.userName = null;
        }
    }
});

export const { userLogin, userLogout } = userSlice.actions

export default userSlice.reducer