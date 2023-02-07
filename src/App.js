import { Route, Routes } from "react-router-dom";
import "./App.css";
import Feature from "./Pages/Feature/Feature";
import Services from "./Pages/Home/Services/Services";
import Pricing from "./Pages/Pricing/Pricing";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Services></Services>}></Route>
        <Route
          path="/Pricing"
          element={
            <RequireAuth>
              <Pricing></Pricing>
            </RequireAuth>
          }
        ></Route>
        <Route path="/Features" element={<Feature></Feature>}></Route>
        <Route path="/SignIn" element={<SignIn></SignIn>}></Route>
        <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
