import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {
  const [activepage, setactivepage] = useState('home');
  return (
    <>
      <Navbar page={activepage} changeNavbar={setactivepage}/>
      <Home/>
    </>
  );
}

export default App;
