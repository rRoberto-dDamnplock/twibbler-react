import React from 'react'
import classes from './DoubleCard.module.css'

function doubleCard(props) {
  return (
    <div className={classes.doubleCard_wrapper}>

{props.children}
</div>
  )
}

export default doubleCard;
