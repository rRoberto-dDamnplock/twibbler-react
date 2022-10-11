import React from 'react'
import classes from './PostComment.module.css'
export default function PostComment(props) {
  return (
    <div className={classes.comments}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.comment}>{props.commented}</p>
        <p>{props.date}</p>
        
    </div>
  )
}
