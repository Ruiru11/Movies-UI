import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./register.scss";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfrimPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    <div className="register-container">
      <form className="register-form">
        <h6 className="register-form-title">Register</h6>
        <label className="register-form-label" htmlFor="email">
          Username
        </label>
        <input
          type="text"
          className="register-form-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="register-form-label" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          className="register-form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="register-form-label" htmlFor="email">
          Password
        </label>
        <input
          type="password"
          className="register-form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="register-form-label" htmlFor="email">
          Confirm Password
        </label>
        <input
          type="password"
          className="register-form-input"
          value={confirmPassword}
          onChange={(e) => setConfrimPassword(e.target.value)}
        />
        <button className="register-submit-form">Register</button>
        <Link to="/login" className="register-form-footer-links">
          Have an account?
        </Link>
      </form>
    </div>
  );
}

export default Register;
