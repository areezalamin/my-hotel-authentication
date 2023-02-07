import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Pricing = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h1>
        this is Pricing.
        {user?.email}
      </h1>
    </div>
  );
};

export default Pricing;
