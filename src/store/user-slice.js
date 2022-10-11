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

const DUMMY_POST = [
  {
      id: 'p1',
      title: 'Nice day',
      text: 'Today was a very nice day, there was sunshine everywhere and it is so nice!',
      date: '2 hours ago',
      comments:[
      {
          author: 'Pierce',
          commented: 'No one gives a shit, you take it or they take it',
          date: '3mins ago',
      }
      ]
  },
  {
      id: 'p2',
      title: 'Bad day',
      text: 'Not so nice of a day today, I had leg day so it is very hard for me to walk!',
      date: '5 hours ago',
      comments:[
      {
          author: 'LeenBeefPatty',
          commented: 'I suggest stretching',
          date: '4mins ago',
      },
      {
          author: 'James',
          commented: 'Same, cant even walk up to my room',
          date: '3mins ago',
      },
      ]
  },

]
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