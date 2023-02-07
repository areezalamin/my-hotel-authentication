import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";

const Cart = ({ service }) => {
  const navigate = useNavigate(auth);
  const { name, img, description } = service;
  const hndleCheckOutButton = () => {
    navigate("/Pricing");
  };
  return (
    <div className="shadow col-sm-12 col-md-6 col-lg-4 g-4">
      <Container>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button onClick={hndleCheckOutButton} variant="success">
              Chack Out
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Cart;
