import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const handleSignOut = () => {
    signOut();
  };
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="success"
      variant="dark"
    >
      <Container>
        <Navbar.Brand className="fs-4" as={Link} to="/">
          My Hotel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="fs-5">
            <Nav.Link as={Link} to="features">
              Features
            </Nav.Link>
            <Nav.Link as={Link} to="pricing">
              Pricing
            </Nav.Link>
            {user ? (
              <Nav.Link onClick={handleSignOut} as={Link} to="SignIn">
                Sign Out
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="SignIn">
                Sign In
              </Nav.Link>
            )}
            <Nav.Link eventKey={2} as={Link} to="SignUp">
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
