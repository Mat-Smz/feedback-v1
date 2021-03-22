import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Feedback from "./components/Feedback";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/feedback/:id">
            {/* feedback component path */}
            <Feedback />
          </Route>
          <Route path="/">
            {/* default path */}
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
