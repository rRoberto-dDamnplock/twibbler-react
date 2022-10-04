import { createSlice } from "@reduxjs/toolkit";

const initialPostValue = {
text: null,
textArea: null,
}

const postSlice = createSlice({
    name: 'login',
    initialState: initialPostValue,
    reducers: {
postFunction (state, action) {
    state.text = action.payload.text;
    state.textArea = action.payload.textArea;
},
    }
})

export const postActions = postSlice.actions;

export default postSlice.reducer;