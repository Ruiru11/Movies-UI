import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";

function Login() {
  const [email, setEmail] = useState("jointheteam@aglet.co.za");
  const [password, setPassword] = useState("123456");

  const loginMethod = () => {
    fetch("http://localhost:3030/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("res", data);
        if (data.token) {
          localStorage.setItem("token", data.token);
          window.location.href = "/";
        }
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h6 className="login-form-title">Log In</h6>
        <label className="login-form-label" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          className="login-form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="login-form-label" htmlFor="email">
          Password
        </label>
        <input
          type="password"
          className="login-form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-submit-form" onClick={() => loginMethod()}>
          Log In
        </button>
        <Link to="/register" className="login-form-footer-links">
          Don't have an account?
        </Link>
      </div>
    </div>
  );
}

export default Login;
