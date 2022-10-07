import { createSlice } from "@reduxjs/toolkit";

const initialUserInfro = {
  users:[],
user: {
    id: null,
    name: null,
    dob: null,
    profession: null,
    username: null
  }
}
function guidGenerator() {
  var S4 = function() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
 

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserInfro,
    reducers: {
        addUser(state, action){
          state.users.push(
            state.user.id = guidGenerator(),
            state.user.name = action.payload.name,
            state.user.dob = action.payload.dob,
            state.user.profession = action.payload.profession,
            state.user.username = action.payload.userName,
          )
        
        }
    }
})

export const userActions = userSlice.actions;
export default userSlice.reducer;