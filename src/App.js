import React from "react";
import { Route, Switch } from "react-router-dom";
import ContactMe from "./components/ContactMe/ContactMe";
import Home from "./pages/Home/Home";
import navbar from "./pages/NavBar/Navbar";
import './App.css'

function App() {
  return (
    <div>
      <div className="Navbar">
        <Route path="*" component={navbar} />
      </div>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/contactMe" component={ContactMe} />

        <Route exact path="*" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
