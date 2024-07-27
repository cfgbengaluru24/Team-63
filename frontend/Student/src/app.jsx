import React, { useContext, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/register.jsx";


import axios from "axios";
import { Context } from "./main";
import Login from "./components/StudentLogin.jsx";
const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<StudentLogin />} />
          {/* <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} /> */}
          <Route path="/register" element={<Register />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;
import React, { useContext, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/register.jsx";


import axios from "axios";
import { Context } from "./main";
import Login from "./components/StudentLogin.jsx";
const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<StudentLogin />} />
          {/* <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} /> */}
          <Route path="/register" element={<Register />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;