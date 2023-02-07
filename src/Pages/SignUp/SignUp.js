import React, { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init.js";
import Facebook from "../AnotherSignUpProcess/Facebook/Facebook.js";
import GitHub from "../AnotherSignUpProcess/GitHub/GitHub.js";
import Google from "../AnotherSignUpProcess/Google/Google.js";

const SignUp = () => {
  const [validated, setValidated] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(auth);

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (user) {
    navigate("/SignIn");
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      //   event.stopPropagation();
    }
    if (password !== confirmPassword) {
      setError("**Password not matching**");
      return;
    }

    setValidated(true);
    createUserWithEmailAndPassword(email, password, name);
  };
  return (
    <div className="d-flex justify-content-center">
      <Form
        className="w-50 "
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Row className="mb-3">
          <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              onBlur={handleName}
              required
              type="text"
              placeholder="First Name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="4" controlId="validationCustom02">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onBlur={handleEmail}
              required
              type="email"
              placeholder="Please Enter valid Email."
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group md="6" controlId="validationCustom03">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePassword}
              type="password"
              placeholder="password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a Password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="3" controlId="validationCustom04">
            <Form.Label>Confirm Password.</Form.Label>
            <Form.Control
              onBlur={handleConfirmPassword}
              type="password"
              placeholder="Please enter a password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Same Password.
            </Form.Control.Feedback>
          </Form.Group>
          <span>
            <small className="text-danger">{error}</small>
          </span>
        </Row>
        <div className="d-flex justify-content-center">
          <Button className="bg-success p-3" type="submit">
            Sign Up
          </Button>
        </div>
        <div className="d-flex justify-content-center">
          <hr className="w-25"></hr>
          <span className="mx-3">or</span>
          <hr className="w-25"></hr>
        </div>
        <div className="d-flex  justify-content-center">
          <Google></Google>

          <GitHub></GitHub>

          <Facebook></Facebook>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
