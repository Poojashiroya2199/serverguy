import React from "react";
import "./styles.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}
