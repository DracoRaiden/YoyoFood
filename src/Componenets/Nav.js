import { Route, Routes, Link } from "react-router-dom";
import FoodDelivery from "./FoodDelivery";
import Working from "./Working";
import CityList from "./CityList";
import SignUpPage from "./SignUpPage";
import "../css/Nav.css";

export default function Nav() {
  return (
    <div className="navbar">
      <img
        src="https://saadali50505.github.io/omnifood/resources/img/logo-white.png"
        alt="YoyoFood logo"
      />
      <div className="list-items">
        <Routes>
          <Route path="/FoodDelivery" element={<FoodDelivery />}></Route>
          <Route path="/Working" element={<Working />}></Route>
          <Route path="/CityList" element={<CityList />}></Route>
          <Route path="/SignUpPage" element={<SignUpPage />}></Route>
        </Routes>
        <Link to="/FoodDelivery">Food Delivery</Link>
        <Link to="/Working">How it Works</Link>
        <Link to="/CityList">Our Cities</Link>
        <Link to="/SignUpPage">Sign Up</Link>
      </div>
    </div>
  );
}
