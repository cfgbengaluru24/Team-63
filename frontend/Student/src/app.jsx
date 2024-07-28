import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/register.jsx";


import axios from "axios";
import StudentLogin from "./components/StudentLogin.jsx";
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
          <Route path="/dashboard" element={<StudentDashboard/>}/>
        </Routes>
        {/* <ToastContainer position="top-center" /> */}
      </Router>
    </>
  );
};

export default App;