import React, { useContext, useEffect } from "react";

import { BrowserRouter , Routes, Route } from "react-router-dom";



import axios from "axios";
import { Context } from "./main.jsx";
import StudentLogin from "../components/StudentLogin.jsx";
import Register from "../components/register.jsx"
const App = () => {

  return (
    <>
    <BrowserRouter>
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
        </BrowserRouter>
    </>
  );
};

export default App;