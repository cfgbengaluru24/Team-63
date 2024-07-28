import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/register.jsx";


import axios from "axios";
//import { Context } from "./main";
import StudentLogin from "./components/StudentLogin.jsx";
import dashboard from "./components/dashboard.jsx";
import StudentDashboard from "./components/dashboard.jsx";
const App = () => {

  return (
    <>
      <Router>


        <Routes>
          <Route path="/login" element={<StudentLogin />} />
          {/* <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} /> */}
          <Route path="/register" element={<Register />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/dashboard" element={<StudentDashboard />} />

        </Routes>
      </Router>
    </>
  );
};

export default App;