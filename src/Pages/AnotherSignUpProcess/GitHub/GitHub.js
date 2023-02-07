import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const GitHub = () => {
  const navigate = useNavigate(auth);
  const [user, setUser] = useState("");
  const provider = new GithubAuthProvider();
  const handleGitHubSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .then((error) => {
        console.error(error);
      });
  };
  if (user) {
    navigate("/");
  }
  return (
    <>
      <Button onClick={handleGitHubSignIn} className="btn-success">
        <Icon.Github></Icon.Github> Sign in with GitHub
      </Button>
    </>
  );
};

export default GitHub;
