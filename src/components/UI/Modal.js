import React, { useRef } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {





  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
   {props.onSubmit &&   <form className={classes.modal_form} onSubmit={props.onSubmit}>
      {props.title && <h1>{props.title}</h1>}  
       {props.labelOne && <label>{props.labelOne}</label>} 
       {props.type_one && props.name_value &&  <input type={props.type_one} ref={props.name_value} /> }
       {props.label_two && <label>{props.label_two}</label> } 
      {props.type_two && props.date_value &&  <input type={props.type_two} ref={props.date_value} />} 
       {props.label_three && <label>{props.label_three}</label>} 
       {props.type_three && props.profession_value && <input type={props.type_three} ref={props.profession_value} />} 
       {props.label_four &&  <label>{props.label_four}</label>}
        {props.type_four && props.userName_value && <input type={props.type_four} ref={props.userName_value} />}
        {props.text_area &&<textarea rows='3' cols='20' type='text' className={classes.input} placeholder="My day was so twibbly today, I am so twibful!" />
}
        {/* <label>{props.type_label_five}</label>
            <input type={props.type_five}/> */}
        <div className={classes.sign_buttons}>
          <button type="submit" className={classes.account_button}>
            Sign In
          </button>
          <button
            type="button"
            className={classes.account_button}
            onClick={props.onCancel}
          >
            Cancel
          </button>
        </div>
      </form>  }
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          labelOne={props.labelOne}
          type_one={props.typeOne}
          label_two={props.labelTwo}
          type_two={props.typeTwo}
          label_three={props.labelThree}
          type_three={props.typeThree}
          label_four={props.labelFour}
          type_four={props.typeFour}
          label_five={props.labelFive}
          type_five={props.typeFive}
          onSubmit={props.onSubmit}
          onCancel={props.onCancel}
          text_area={props.textArea}
          //refs
          name_value={props.nameValue}
          date_value={props.dateValue}
          profession_value={props.professionValue}
          userName_value={props.userNameValue}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
