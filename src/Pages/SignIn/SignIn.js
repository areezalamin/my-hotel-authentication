import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(auth);

  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);

  const handleEamil = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  if (user) {
    navigate("/");
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className=" d-flex justify-content-center">
      <Form className="w-50">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEamil}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePassword}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button
          className="bg-success"
          onClick={handleSubmit}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
        <br></br>
        <span>
          <small>
            If you are not registared"
            <Link to="/SignUp">please Sign Up</Link>"
          </small>
        </span>
        <div className="d-flex justify-content-center">
          <hr className="w-25"></hr>
          <span className="mx-3">or</span>
          <hr className="w-25"></hr>
        </div>
      </Form>
    </div>
  );
};

export default SignIn;
