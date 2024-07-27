import React, { useContext, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
//import Appointment from "./Pages/Appointment";
// import AboutUs from "./Pages/AboutUs";
//import Register from "./Pages/Register";
import Footer from "./components/footer.jsx";
import Navbar from "./components/navbar.jsx";
//import { ToastContainer } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
//import { Context } from "./main";
// import Login from "./Pages/Login";
const App = () => {
//   const { isAuthenticated, setIsAuthenticated, setUser } =
//     useContext(Context);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:4000/api/v1/user/patient/me",
//           {
//             withCredentials: true,
//           }
//         );
//         setIsAuthenticated(true);
//         setUser(response.data.user);
//       } catch (error) {
//         setIsAuthenticated(false);
//         setUser({});
//       }
//     };
//     fetchUser();
//   }, [isAuthenticated]);


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          {/* <Route path="/appointment" element={<Appointment />} /> */}
          {/* <Route path="/about" element={<AboutUs />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
        <Footer />
        
      </Router>
    </>
  );
}


export default App;