import React, { useContext, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Register from "./components/register.jsx";


import axios from "axios";
import { Context } from "./main";
import Login from "./components/StudentLogin.jsx";
const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } =
    useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/patient/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<StudentLogin />} />
          {/* <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} /> */}
          <Route path="/login/register" element={<Register />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;