import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./index.css";
// import App from "./App";
import Home from "./Home";

import { AuthProvider } from "../context/auth.Context";
import Register from "./Register";
import Login from "./Login";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={Home} />
        <Route path="/register" element={Register} />
        <Route path="/login" element={Login} />
      </Routes>
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
export default AppRouter;

