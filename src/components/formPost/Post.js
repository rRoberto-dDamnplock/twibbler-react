import React from 'react'
import classes from './Post.module.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { postActions } from '../../store/post-slice'

export default function Post() {
  const textValue = useSelector((state) => state.post.text)
  const textAreaValue = useSelector(state => state.post.textArea)
  const dispatch = useDispatch();

const postFormSubmitHandler = () => {

dispatch(postActions.postFunction(
  
));

  console.log()
}

  return (
    <div>
        <form className={classes.form} onSubmit={postFormSubmitHandler}>
            <h1>Make a Posts</h1>
            <label >Title</label>
            <input placeholder="About my day"  type='text' className={classes.input} value={textValue} />
            <label >Text</label>
            <textarea value={textAreaValue} rows='3' cols='20' type='text' className={classes.input} placeholder="My day was so twibbly today, I am so twibful!" />
        <button className={classes.post_button}>Submit</button>
        </form>
    </div>
  )
}
