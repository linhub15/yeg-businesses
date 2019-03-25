import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./components/home.component";
import Category from "./components/category-view.component";
import BusinessDetail from "./components/business-view.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/categories" component={Category} />
            <Route exact path="/business" component={BusinessDetail} />
          </Switch>

          <footer className="app-footer">
            <h2>Contributors</h2>
            <p id="hubert">Hubert</p>
            <p id="ian">Ian</p>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
