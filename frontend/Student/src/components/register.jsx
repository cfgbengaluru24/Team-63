import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css'; // Assuming you save the custom CSS in this file
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

const Register = () => {
    console.log("checcking");
    
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState("");
  const [password, setPassword] = useState("");
//   const navigateTo = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "grade") setGrade(value);
    if (name === "password") setPassword(value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/user/patient/register",
          { name, email, grade, password },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
        //   navigateTo("/");
          setName("");
          setEmail("");
          setGrade("");
          setPassword("");
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    
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
          <h2 className="text-center">USER REGISTRATION</h2>
          <hr />
          <div className="mb-3">
            <label htmlFor="name" className="form-label"> Name</label>
            <input 
              type="text" 
              name="name" 
              className="form-control" 
              id="name" 
              aria-describedby="nameHelp" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email" 
              name="email" 
              className="form-control" 
              id="email" 
              aria-describedby="emailHelp" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="grade" className="form-label">Grade</label>
            <input 
              type="text" 
              name="grade" 
              className="form-control" 
              id="grade" 
              aria-describedby="gradeHelp" 
              value={grade} 
              onChange={(e) => setGrade(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary" >Register</button>
          <br />
          <p>Already have an account? <a href="/login">Login Here</a></p>
        </form>
      </div>
    </div>
    </>
  );
};

export default Register;
