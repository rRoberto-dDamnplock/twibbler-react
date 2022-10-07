import Modal from "../UI/Modal";
import classes from "./Header.module.css";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../store/login-slice";
import { userActions } from "../../store/user-slice";
import { Link, useRouteMatch  } from "react-router-dom";


export default function Header() {
  const nameInputRef = useRef();
  const dateInputRef = useRef();
  const professionInputRef = useRef();
  const userNameInputRef = useRef();
///this is for the post refs
  const titleInputRef = useRef();
  const aboutMyDayInputRef = useRef();

  // const userNameName = nameInputRef.current.value;
  // const userDate = dateInputRef.current.value;
  // const userProfession = professionInputRef.current.value;
  // const userNameUserName = userNameInputRef.current.value;

  // console.log(nameInputRef.current.value, dateInputRef.current.value);

  const logged = useSelector((state) => state.login.isLoggedIn);

  const dispatch = useDispatch();
  const [showModal, setIsShowModal] = useState(false);
  const [showPostModal, setIsShowPostModal] = useState(false);

  const accountClickHandler = (e) => {
    e.preventDefault();

    setIsShowModal(true);
  };
  //cancel handlers 
  const onCancelAccountHandler = (e) => {
    e.preventDefault();

    setIsShowModal((prevShowmodal) => !prevShowmodal);
  };

  const onCancelPostHandler = (e) => {
    e.preventDefault();

    setIsShowPostModal((prevPostModal) => !prevPostModal)
  }
// submit handlers 
  const onSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(loginActions.loginFunction());
    dispatch(
      userActions.addUser({
        // name: userNameName,
        // dob: userDate,
        // profession: userProfession,
        // userName: userNameUserName,

        name: nameInputRef.current.value,
        dob: dateInputRef.current.value,
        profession: professionInputRef.current.value,
        userName: userNameInputRef.current.value,
      })
    );
    setIsShowModal(false);
    console.log(nameInputRef.current.value, userNameInputRef.current.value);
  };

  const onSubmitPostHandler = (e) => {
    e.preventDefault()

    console.log(titleInputRef.current.ref, aboutMyDayInputRef.current.ref)
    // const titleInputRef = useRef();
    // const aboutMyDayInputRef = useRef();
  }

  const logoutClickHandler = (e) => {
    e.preventDefault();
    dispatch(loginActions.loginFunction());
  };

  const makeAPostClickHandler = (e) => {
e.preventDefault()

setIsShowPostModal(prevPostModal => !prevPostModal);
  }

  const match = useRouteMatch()

  return (
    <>
      <div className={classes.header}>
        {showModal && (
          <Modal
            title="Fill your info"
            labelOne="Name"
            typeOne="name"
            labelTwo="DOB:"
            typeTwo="date"
            labelThree="Profession"
            typeThree="text"
            labelFour="UserName:"
            typeFour="name"
            onSubmit={onSubmitHandler}
            onCancel={onCancelAccountHandler}
            nameValue={nameInputRef}
            dateValue={dateInputRef}
            professionValue={professionInputRef}
            userNameValue={userNameInputRef}
            
          
          />
        )}

        {showPostModal && (
          <Modal
          title="Make a post"
          labelOne="Title"
          typeOne="text"
          labelTwo="Text:"
       
          textArea='true'
          onSubmit={onSubmitPostHandler}
          onCancel={onCancelPostHandler}
          nameValue={nameInputRef}
          dateValue={dateInputRef}
          professionValue={professionInputRef}
          userNameValue={userNameInputRef}
          />
        )}

        <Link to='/home' style={{ textDecoration: 'none' }}><h1>Twibbler</h1></Link>
        <Link to='/home/whats-new' style={{ textDecoration: 'none' }}><h3>What is new</h3></Link>
        {logged ? (
          <h3 onClick={makeAPostClickHandler}>Make a post</h3>
        ) : (
          <h3 onClick={accountClickHandler} >Account</h3>
        )}

        {logged && (
          <h3 className={classes.log_out} onClick={logoutClickHandler}>
            Log out
          </h3>
        )}
      </div>
    </>
  );
}