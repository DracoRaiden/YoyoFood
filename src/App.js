import "./App.css";
import Nav from "./Componenets/Nav";
import Hero from "./Componenets/Hero";
import Working from "./Componenets/Working";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Nav />
        <Hero />
      </div>
      <div className="main">
        <Working />
      </div>
    </div>
  );
}

export default App;
