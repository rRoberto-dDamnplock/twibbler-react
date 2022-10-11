import React from 'react'
import classes from './PostItem.module.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouteMatch, Link } from 'react-router-dom'

function PostItem(props) {
    const match = useRouteMatch()
    const [showComment, setShowComments] = useState(false)
const comments = useSelector(state => state.post.posts)

    const viewCommentHandler = () => {
        setShowComments(prevShowComment =>!prevShowComment)
    }

    const ItemClickHandler = (e) => {
       console.log(e.target.id)
       return e.target.id
    }
   
    // $('b.edit').click(function(){
    //     $(this).attr('id');
    //    });
  
  return (
    <>
    {comments.length > 1 ? (
        <li className={classes.item}>
        <div className={classes.item_wrap}>
    <h1>{props.title}</h1>
    <h2>{props.text}</h2>
    <p>{props.date}</p>
    <p style={{marginLeft: '.2rem'}}>{props.commentNumber}comments</p>
    
    {!showComment ?( <Link value={ItemClickHandler} id={props.id} onClick={ItemClickHandler} to={`${match.url}/replies/${props.title}`}style={{marginLeft: '.7rem', fontWeight: 'bold'}} >View replies...</Link>) : 
    ( <div> <a style={{ fontWeight: 'bold'}} onClick={viewCommentHandler}>Add comment</a> <p>{props.commented}</p> <a onClick={viewCommentHandler}>Hide comments</a></div>
        
    )}
    
    </div>
    
       </li>
    ): <h2>No post yet</h2>}
  
  </>
  )
}

export default PostItem