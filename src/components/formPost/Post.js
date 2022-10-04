import React from 'react'
import classes from './Post.module.css'
export default function Post() {
  return (
    <div>
        <form className={classes.form}>
            <h1>Make a Posts</h1>
            <label >Title</label>
            <input placeholder="About my day"  type='text' className={classes.input} />
            <label >Text</label>
            <textarea rows='3' cols='20' type='text' className={classes.input} placeholder="My day was so twibbly today, I am so twibful!" />
        </form>
    </div>
  )
}
