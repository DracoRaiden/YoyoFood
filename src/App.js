import "./App.css";
import Nav from "./Componenets/Nav";
import Hero from "./Componenets/Hero";
import FoodDelivery from "./Componenets/FoodDelivery";
import Working from "./Componenets/Working";
import CityList from "./Componenets/CityList";
import Customers from "./Componenets/Customers";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Nav />
        <Hero />
      </div>
      <div className="main">
        <div id="FoodDelivery">
          <FoodDelivery />
        </div>
        <div id="Working">
          <Working />
        </div>
        <div id="CityList">
          <CityList />
        </div>
        <div className="Customers">
          <Customers />
        </div>
      </div>
    </div>
  );
}

export default App;
