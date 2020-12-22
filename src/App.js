import React from "react";
import "./styles.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Description from "./Description";
export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route
          path="/home"
          render={(props) => <Home display={true} {...props} />}
        />
        <Route path="/description" component={Description} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}
