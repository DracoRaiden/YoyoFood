// import { Route, Routes, Link } from "react-router-dom";
// import FoodDelivery from "./FoodDelivery";
// import Working from "./Working";
// import CityList from "./CityList";
// import SignUpPage from "./SignUpPage";
import { useState } from "react";
import "../css/Nav.css";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="navbar">
      <img
        src="https://saadali50505.github.io/omnifood/resources/img/logo-white.png"
        alt="YoyoFood logo"
      />
      <div className="list-items">
        <a href="#FoodDelivery">Food Delivery</a>
        <a href="#Working">How it Works</a>
        <a href="#CityList">Our Cities</a>
        <a href="#SignUp">Sign Up</a>
      </div>

      <div className={`show-menu ${isMenuOpen ? "mobile-menu" : ""}`}>
        <a href="#FoodDelivery">Food Delivery</a>
        <a href="#Working">How it Works</a>
        <a href="#CityList">Our Cities</a>
        <a href="#SignUp">Sign Up</a>
      </div>

      <div className="hamburger">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* <Routes>
          <Route path="/FoodDelivery" element={<FoodDelivery />}></Route>
          <Route path="/Working" element={<Working />}></Route>
          <Route path="/CityList" element={<CityList />}></Route>
          <Route path="/SignUpPage" element={<SignUpPage />}></Route>
        </Routes> */}
      {/* <Link to="/FoodDelivery">Food Delivery</Link> */}
      {/* <Link to="/Working">How it Works</Link> */}
      {/* <Link to="/CityList">Our Cities</Link> */}
      {/* <Link to="/SignUpPage">Sign Up</Link> */}
    </div>
  );
}
