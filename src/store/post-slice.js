import { createSlice } from "@reduxjs/toolkit";

const initialPostValue = {
  posts: [
    {
      id: 'p1',
      text: null,
      textArea: null,
      order: undefined,
    },
    {
        id: 'p1',
        text: null,
        textArea: null,
        order: undefined,
      },
  ],
};

const postSlice = createSlice({
  name: "login",
  initialState: initialPostValue,
  reducers: {
    postFunction(state, action) {
      state.text = action.payload.text;
      state.textArea = action.payload.textArea;
      state.order = action.payload.order;
    },
  },
});

export const postActions = postSlice.actions;

export default postSlice.reducer;
