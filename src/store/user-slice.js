import { createSlice } from "@reduxjs/toolkit";

const initialUserInfro = {
  user: {
    name: null,
    dob: null,
    profession: null,
    username: null
  }

}

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserInfro,
    reducers: {
        addUser(state, action){
            state.user.name = action.payload.name;
            state.user.dob = action.payload.dob;
            state.user.profession = action.payload.profession;
            state.user.username = action.payload.userName;
        }
    }
})

export const userActions = userSlice.actions;
export default userSlice.reducer;