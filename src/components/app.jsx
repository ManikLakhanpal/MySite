import React from "react";
import NavigationBar from "./navigationBar";
import HomeMain from "./homeMain";
import About from "./about";
import Portfolio from "./portfilio";

function App() {
  
  return (
    <div>
      <NavigationBar />
      <HomeMain />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
