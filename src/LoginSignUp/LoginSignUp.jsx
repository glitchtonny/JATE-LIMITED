import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginSignUp.css'

const LoginSignUp = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container text-center py-5">
      <div className="header">
        <h2 className="mb-4">{action}</h2>
        <div className="underline mb-4"></div>
      </div>

      <form className="inputs">
        {action === "Login" ? null : (
          <div className="input mb-3">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            <input type="text" className="form-control" placeholder="Name" />
          </div>
        )}

        <div className="input mb-3">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          <input type="email" className="form-control" placeholder="Email" />
        </div>

        <div className="input mb-3">
          <FontAwesomeIcon icon={faLock} className="mr-2" />
          <input type="password" className="form-control" placeholder="Password" />
        </div>

        {action === "Sign Up" ? (
          <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
        ) : (
          <button type="submit" className="btn btn-primary btn-block">Login</button>
        )}
      </form>

      {action === "Sign Up" ? null : (
        <div className="forgot-password mt-3">
          Forgot Password? <span className="text-primary">Click Here!</span>
        </div>
      )}

      <div className="submit-container mt-4">
        <button
          className={action === "Login" ? "btn btn-secondary mr-2" : "btn btn-primary mr-2"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </button>
        <button
          className={action === "Sign Up" ? "btn btn-secondary" : "btn btn-primary"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginSignUp;

