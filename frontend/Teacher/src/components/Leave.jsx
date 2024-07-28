import React, { useState } from "react";
import axios from "axios";

const Leave = ({ teacherId }) => {
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/teacher/announcement",
        { date, reason },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        setMessage("Leave request submitted successfully.");
      } else {
        setMessage("Unexpected response status: " + response.status);
      }
    } catch (error) {
      setMessage("Error during leave request: " + error.message);
    } finally {
      setLoading(false);
      setDate("");
      setReason("");
    }
  };

  return (
    <div>
      <h2>Request Leave</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="reason">Reason:</label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Leave Request"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Leave;
