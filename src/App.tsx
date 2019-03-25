import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./components/home.component";
import Category from "./components/category-view.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h2>Contributors</h2>
            <p id="hubert">Hubert</p>
            <p id="ian">Ian</p>
          </header>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/categories" component={Category} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
