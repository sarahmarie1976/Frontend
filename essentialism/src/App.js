import React from "react";
import { Link, Route } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import "./App.css";

const App = () => {
  return (
    <div>
      <header>
        <h1>Essentialism</h1>
        <Link to={"/"}>
          <button>Login</button>
        </Link>
        <Link to={"/signupform"}>
          <button>Get Started</button>
        </Link>
      </header>

      {/* <Route exact path="/" component={Home} /> */}
      <Route path="/signupform" component={SignUpForm} />
    </div>
  );
};
export default App;
