import React, { Component, useState } from "react";
import { render } from "react-dom";
import Home from "./Home/Home";


function App() {

  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;

const container = document.getElementById("app");
render(<App />, container);