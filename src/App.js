import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import PagesContainer from "./pages/pages-container";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/dashboard" component={PagesContainer} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
