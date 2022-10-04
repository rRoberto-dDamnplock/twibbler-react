import {createSlice} from '@reduxjs/toolkit';

const initialLogin = {
    isLoggedIn: false,
}

const loginSlice = createSlice({
    name: 'login',
    initialState: initialLogin,
    reducers: {
loginFunction (state) {
    state.isLoggedIn = !state.isLoggedIn
},
    }
})

export const loginActions = loginSlice.actions;

export default loginSlice.reducer;