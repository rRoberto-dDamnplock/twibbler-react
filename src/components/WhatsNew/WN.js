import React from 'react'
import Activities from '../activities/Activities'
import classes from './WN.module.css'
export default function WN() {
  return (
    <div className={classes.wn}>
        <h1>Whats new</h1>
        <hr/>
        <Activities/>
    </div>
  )
}
