import React, { useState } from 'react';
import './login.css'; // Import the CSS file

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="bg-img">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Dhulikona Foundation User Login Panel</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {/* Authentication check should be handled in React */}
              <li className="nav-item">
                <a className="nav-link btn btn-outline-primary" href="/">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="content">
        <header>Login Form</header>
        <form method="post" enctype="multipart/form-data">
          {/* CSRF token should be handled if you're using an API */}
          <div className="field">
            <span className="fa fa-user"></span>
            <select name="loginas" className="form-control" id="loginas" required>
              <option value="admin">Admin</option>
              <option value="panchayathead">Panchayat Head</option>
              <option value="consumer">Consumer</option>
              <option value="contractor">Contractor</option>
              <option value="watercommitteehead">Water Committee Head</option>
              <option value="pumpoperator">Pump Operator</option>
            </select>
          </div>
          <div className="field space">
            <span className="fa fa-user"></span>
            <input type="text" name="username" required placeholder="User Name" />
          </div>
          <div className="field space">
            <span className="fa fa-lock"></span>
            <input type={passwordVisible ? "text" : "password"} className="pass-key" name="password" required placeholder="Password" />
            <span className="show" onClick={togglePasswordVisibility}>
              {passwordVisible ? "HIDE" : "SHOW"}
            </span>
          </div>
          <div className="pass">
            <a href="#">Forgot Password?</a>
          </div>
          <div className="field">
            <input type="submit" value="LOGIN" />
          </div>
        </form>
        <div className="login">
          Or login with
        </div>
        <div className="links">
          <div className="facebook">
            <i className="fab fa-facebook-f"><span>Facebook</span></i>
          </div>
          <div className="instagram">
            <i className="fab fa-instagram"><span>Instagram</span></i>
          </div>
        </div>
        <div className="signup">
          Don't have account?
          <a href="#">Signup Now</a>
        </div>
      </div>
    </div>
  );
}
