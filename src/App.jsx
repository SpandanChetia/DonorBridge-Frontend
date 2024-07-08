import React from "react";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import FrontHomePage from "./components/Home/frontHomePage/FrontHomePage";
import BackHomePage from "./components/Home/backHomePage/BackHomePage";

function App() {
  const [activepage, setactivepage] = useState('home');
  return (
    <>
      <Navbar/>
      <FrontHomePage />
      <BackHomePage />
    </>
  );
}

export default App;
