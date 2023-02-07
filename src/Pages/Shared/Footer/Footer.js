import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="container">
      <p className="text-center">
        <small className="text-success">Copywrite © {year} Name</small>
      </p>
    </div>
  );
};

export default Footer;
