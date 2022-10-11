import React from "react";
import classes from "./PostDetail.module.css";
export default function PostDetail(props) {
    // title={posted.title}
    // text={posted.text}
    // date={posted.date}
  return (
    <div className={classes.post_card}>
      <h2>{props.title}</h2>
      <hr style={{ color: "white", width: "95%" }} />   
      <h3>
     {props.text}
      </h3>
      <p>posted on {props.date}</p>
    </div>
  );
}
