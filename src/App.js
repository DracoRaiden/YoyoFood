import "./App.css";
import Nav from "./Componenets/Nav";
import Hero from "./Componenets/Hero";
import FoodDelivery from "./Componenets/FoodDelivery";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Nav />
        <Hero />
      </div>
      <div className="main">
        <FoodDelivery />
      </div>
    </div>
  );
}

export default App;
