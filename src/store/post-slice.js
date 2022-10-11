import { createSlice } from "@reduxjs/toolkit";

// const initialPostValue = {
//   posts: [
//     {
//         id: 'p1',
//         title: 'Nice day',
//         text: 'Today was a very nice day, there was sunshine everywhere and it is so nice!',
//         date: '2 hours ago',
//         comments:[
//         {
//             author: 'Pierce',
//             commented: 'No one gives a shit, you take it or they take it. So fuck you',
//             date: '3mins ago',
//         }
//         ]
//     },
//     {
//         id: 'p2',
//         title: 'Bad day',
//         text: 'Not so nice of a day today, I had leg day so it is very hard for me to walk!',
//         date: '5 hours ago',
//         comments:[
//         {
//             author: 'LeenBeefPatty',
//             commented: 'I suggest stretching',
//             date: '4mins ago',
//         },
//         {
//             author: 'James',
//             commented: 'Same, cant even walk up to my room',
//             date: '3mins ago',
//         },
//         ]
//     },
  
//   ],
// };

const initialPostValue = {
  posts: [
    {
        id: null,
        title: null,
        text: null,
        date: null,
        comments:[]
    },
  ],
};
function guidGenerator() {
  var S4 = function() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}



const postSlice = createSlice({
  name: "login",
  initialState: initialPostValue,
  reducers: {
    postFunction(state, action) {
      state.posts.push({
        id: guidGenerator(),
        title:action.payload.title,
        text : action.payload.text,
        date :  new Date().toLocaleString(),

      })
    
    },
    postCommentFunction(state, action){
     
    }
  },
});

export const postActions = postSlice.actions;

export default postSlice.reducer;
