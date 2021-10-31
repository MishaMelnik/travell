import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import logo1 from './img/travel-2.jpg'
import logo2 from './img/travel-5.jpg'
import logo3 from './img/travel-4.jpg'
import Navbar from "./components/Navbar/Navbar";

const navbarLinks = [
    {url:"#", title:"Home"},
    {url:"#", title:"Trips"},
    {url:"#", title:"Rewards"}
];

function App() {
  return (
    <div className="App">
        <Navbar navbarLinks={navbarLinks}/>
        <Header imageSrc={logo1}/>
        <Slider imageSrc={logo2}
                title={"Be an explorer!"}
                subtitle={"Our platform offers a wide variety of unigue travel location!"}
        />
        <Slider imageSrc={logo3}
                title={"Memories for a lifetime!"}
                subtitle={"Your dream vacation is only a few clicks away."}
                flipped={true}
        />
    </div>
  );
}

export default App;
