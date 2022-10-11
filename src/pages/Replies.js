import React from "react";
import { useParams } from "react-router-dom";
import PostDetail from "../components/Posts/PostDetail";
import { useSelector } from "react-redux";
export default function Replies(props) {
  const params = useParams();
const post = useSelector(state => state.post.posts);
  const { twibId } = params;
   
//   const posted = post.find(item => item.title === 'hello' );
  const testing = post.find(item => item.title === props.data.id);
//   console.log(props.data)

//   let data = props.data;

//   data.map((obj) => {
//  testing = post.find((item) => item.title === obj.title)
//   })



  console.log(testing)
  
//   console.log(posted);
    // transformedComments.push(commentObj);
  
  return (
    <>
      <div>
        <h1>{twibId}</h1>
      </div>
      <PostDetail
      title={testing.title}
      text={testing.text}
      date={testing.date}
      
      />
      
    </>
  );
}
