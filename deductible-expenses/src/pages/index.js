import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./index.css";
// import App from "./App";
import Home from "./Home";

import AuthProvider from "../context/auth.Context";
import Register from "./Register";
import Login from "./Login";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

if (typeof document !== "undefined") {
  const rootElement = document.getElementById("root");
  ReactDOM.render(
    <React.StrictMode>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </React.StrictMode>,
    rootElement
  );
}
