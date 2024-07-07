import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import FrontHomePage from "./components/Home/FrontHomePage/FrontHomePage";
import BackHomePage from "./components/Home/BackHomePage/BackHomePage";

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
