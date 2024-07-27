import React, { useState } from 'react';
import './login.css';

export default function AdminLogin() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="bg-img">
      <div className="content">
        <header>Admin Login</header>
        <form method="post">
          <div className="field">
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
      </div>
    </div>
  );
}

