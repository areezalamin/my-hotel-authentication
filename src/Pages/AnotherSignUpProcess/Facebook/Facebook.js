import React from "react";
import { Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const Facebook = () => {
  const handleFacebookSignIn = () => {
    console.log("I am working.");
  };
  return (
    <>
      <Button onClick={handleFacebookSignIn} className="btn-success">
        <Icon.Facebook></Icon.Facebook> Sign in with Facebook
      </Button>
    </>
  );
};

export default Facebook;
