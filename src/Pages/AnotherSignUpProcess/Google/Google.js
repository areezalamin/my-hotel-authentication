import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Google = () => {
  const navigate = useNavigate(auth);

  const [user, setUser] = useState("");
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .then((error) => {
        console.error(error.message);
      });
  };
  if (user) {
    navigate("/");
  }
  return (
    <>
      <Button onClick={handleGoogleSignIn} className="btn-success">
        <Icon.Google></Icon.Google> Sign in with Google
      </Button>
    </>
  );
};

export default Google;
