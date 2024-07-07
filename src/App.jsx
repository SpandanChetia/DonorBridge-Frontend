import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Categories from "./components/Catagories/Categories";

function App() {
  const [activepage, setactivepage] = useState('home');
  return (
    <>
      <Categories/>
    </>
  );
}

export default App;
