import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateInterview from "./components/CreateInterview";
import UpdateInterview from "./components/UpdateInterview";
import ViewInterview from "./components/ViewInterview";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={CreateInterview} />
          <Route path="/view-interview" component={ViewInterview} />
          <Route path="/update-interview" component={UpdateInterview} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
