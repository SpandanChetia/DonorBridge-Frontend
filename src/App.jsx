import { useState } from "react";

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
