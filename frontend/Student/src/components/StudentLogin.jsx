import React, { useState } from 'react';
import './StudentLogin.css'; // Import the CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/user/patient/login",
          {  email, password },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          navigateTo("/");
          setName("");
          setEmail("");
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand"><b>User's Recipe List</b></a>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            {true ? ( // Replace with authentication check
              <a className="btn btn-outline-success" type="submit" href='/logout/'>Logout</a>
            ) : (
              <a className="btn btn-outline-success" type="submit" href='/login/'>Login</a>
            )}
          </form>
        </div>
      </nav>
      <div className="container mt-5">
        <form className="col-6 mx-auto card p-3 shadow-lg" onSubmit={handleRegister} encType="multipart/form-data">
          <h2 className="text-center">Student Login</h2>
          <hr />
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email" 
              name="email" 
              className="form-control" 
              id="email" 
              aria-describedby="emailHelp" 
              value={email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input 
              type="password" 
              name="password" 
              className="form-control" 
              id="password" 
              value={password} 
              onChange={handleChange} 
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <br />
          <p>Don't have an account? </p><link to={"/register"} >Register Now</link>
        </form>
      </div>
    </div>
  );
};

export default Login