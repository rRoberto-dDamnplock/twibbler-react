import React from 'react'
import PostItem from './PostItem'
import classes from './Posts.module.css'
import PostComment from './PostComment'
import { useSelector } from 'react-redux'
// const DUMMY_POST = [
//     {
//         id: 'p1',
//         title: 'Nice day',
//         text: 'Today was a very nice day, there was sunshine everywhere and it is so nice!',
//         date: '2 hours ago',
//         comments:[
//         {
//             author: 'Pierce',
//             commented: 'No one gives a shit, you take it or they take it',
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

// ]

export default function Posts() {
    const post = useSelector(state => state.post.posts)
    
    let content;

    if(post.comments ===  undefined){
        content = <p>No comments yet</p>
      } else {
         content = post.comments.map((userCommenter) => (
             <PostComment
      author={userCommenter.author}
      commented={userCommenter.commented}
      date={userCommenter.date}
      />
         ))
      }

      

  return (
    <div className={classes.post_list}>
        <ul className={classes.list}>

        {post.map((post) => (
          <PostItem
            key={post.id}
            id={post.id}
            title={post.title}
            text={post.text}
            date={post.date}
            // commentNumber={post.comments.length}
          
            commented={content}
         
          />
        ))}
      </ul>
    </div>
  )
}
