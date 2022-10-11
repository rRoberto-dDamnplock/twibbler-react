import React from "react";
import classes from "./Post.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postActions } from "../../store/post-slice";
import { useRef } from "react";
export default function Post() {
  const textValue = useSelector((state) => state.post.posts.title);
  const textAreaValue = useSelector((state) => state.post.posts.text);
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login.isLoggedIn);
const titleRef = useRef()
const textRef = useRef()
 

  // const initialPostValue = {
  //   posts: [
  //     {
  //         id: null,
  //         title: null,
  //         text: null,
  //         date: null,
  //         comments:[]
  //     },
  //   ],
  // };
  // state.posts.push({
  //   id: guidGenerator(),
  //   title:action.payload.text,
  //   text : action.payload.textArea,
  //   date :  new Date().toLocaleString(),
  //   comments: [{
  //     author: action.payload.author,
  //     commented: action.payload.commented,
  //     date: new Date().toLocaleString(),
  //   }
      
  const postFormSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(postActions.postFunction({
      title: titleRef.current.value,
      text: textRef.current.value,

    }));

    console.log();
  };

  return (
    <div>
      {login ? (
        <form className={classes.form} onSubmit={postFormSubmitHandler}>
          <h1>Make a Posts</h1>
          <label>Title</label>
          <input
            placeholder="About my day"
            type="text"
            className={classes.input}
            value={textValue}
            ref={titleRef}
          />
          <label>Text</label>
          <textarea
            value={textAreaValue}
            rows="3"
            cols="20"
            type="text"
            className={classes.input}
            placeholder="My day was so twibbly today, I am so twibful!"
            ref={textRef}
          />
          <button className={classes.post_button}>Submit</button>
        </form>
      ) : (
        <div className={classes.form}>
          <h1>
            Need login before post. Meanwhile, would you like a walkthrough
            through our app?
          </h1>
          <div className="flex">
          <p>Yes?</p>
          <p>No, its ok!</p>
          </div>
        </div>
      )}
    </div>
  );
}
