import React from "react";
import classes from "./aboutUser.module.css";
import { useSelector } from "react-redux";

function AboutUser() {
  const login = useSelector((state) => state.login.isLoggedIn);
  const name = useSelector((state) => state.user.user.name);
  const dob = useSelector((state) => state.user.user.dob);
  const profession = useSelector((state) => state.user.user.profession);
  const userNaming = useSelector((state) => state.user.user.username);

  return (
    <div className={classes.about_user}>
      {login ? (
        <span>
          
          <h1 style={{ color: "##657786" }}>
            Name: <span style={{ color: "#AAB8C2" }}>{name}</span>
          </h1>
          <h1 style={{ color: "##657786" }}>
            DOB: <span style={{ color: "#AAB8C2" }}>{dob}</span>
          </h1>
          <h1 style={{ color: "##657786" }}>
            Proffesion: <span style={{ color: "#AAB8C2" }}>{profession}</span>
          </h1>
          <h1 style={{ color: "##657786" }}>
            Username: <span style={{ color: "#AAB8C2" }}>{userNaming}</span>
          </h1>
        </span>
      ) : (
        <h1>No info yet. Please log in</h1>
      )}
    </div>
  );
}

export default AboutUser;
