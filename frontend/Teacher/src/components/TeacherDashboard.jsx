import React from "react";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Students from "./Students";
import Leave from "./Leave";

const TeacherDashboard = () => {
  return (
    <BrowserRouter>
   
      <div style={styles.dashboard}>
        <h1>Teacher Dashboard</h1>
        <div style={styles.buttonContainer}>
          <Link to="/dashboard/students">
            <button style={styles.button}>Students</button>
          </Link>
          <Link to="/dashboard/leave">
            <button style={styles.button}>Leave</button>
          </Link>
        </div>

        <Routes>
          <Route path="/students" element={<Students />} />
          <Route path="/leave" element={<Leave />} />
        </Routes>
      </div>
    
    </BrowserRouter>
  );
};

const styles = {
  dashboard: {
    textAlign: "center",
    padding: "20px",
  },
  buttonContainer: {
    margin: "20px 0",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default TeacherDashboard;
