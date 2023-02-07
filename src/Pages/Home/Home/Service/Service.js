import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart.js";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("Service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container">
      <h1 className="text-success text-center mt-5">
        My Service: {services.length}
      </h1>
      <div className="row">
        {services.map((service) => (
          <Cart key={service.id} service={service}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Service;
