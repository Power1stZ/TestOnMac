import React from "react";
import { BrowserRouter as Router,Route } from 'react-router-dom';
import "./App.css";
import { Game } from "./pages/Game/Game.js";
import { Menu } from "./pages/Menu/Menu.js";
import { Home } from "./pages/Home/Home.js";

function App() {

  return (
    <div>
      <Router>
        <Route path="/home" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/menu" component={Menu} />
      </Router>
    </div>
  );
}

export default App;
