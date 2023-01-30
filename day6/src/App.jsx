import * as React from "react";
import Container from "./components/Container";
import DrawerApp from "./components/DrawerApp"

import "./App.css";

function App() {
  return (
    <div className="App">
      <DrawerApp/>
      <Container />
    </div>
  );
}

export default App;
