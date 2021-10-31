import React from "react";
import './App.css';
import logo1 from './img/travel-2.jpg'
import Header from "./components/Header/Header";
//import logo2 from './img/travel-1.jpg'
//import logo3 from './img/travel-3.jpg'

function App() {
  return (
    <div className="App">
        <Header imageSrc={logo1}/>
    </div>
  );
}

export default App;
