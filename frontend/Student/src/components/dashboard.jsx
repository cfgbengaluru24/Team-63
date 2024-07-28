import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './studentsDashboard.css';

const StudentDashboard = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [mentoring, setMentoring] = useState(false);
    const [selectedMentor, setSelectedMentor] = useState('');
    const [feedback, setFeedback] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [doubtSubject, setDoubtSubject] = useState('');
    const [doubt, setDoubt] = useState('');
    const [studentData, setStudentData] = useState(null);
    const [mentors, setMentors] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [meetingNotes, setMeetingNotes] = useState('');

    useEffect(() => {
        console.log("test");
        axios.get('http://localhost:8000/api/v1/student/')
            .then(response => {
                setStudentData(response.data.data);
                //setSubjects(Object.keys(response.data.marks));
            })
            .catch(error => {
                console.error('There was an error fetching the student data!', error);
            })
        axios.get('http://localhost:8000/api/v1/teacher/meetingnotes/sugatalaha@gmail.com')
            .then(response => {
                setMeetingNotes(response?.data?.data?.meetingnotes);
            })
            .catch(error => {
                console.error('There was an error fetching the meeting notes!', error);
            });
    }, []);


    // axios.get('/api/mentors')
    // .then(response => {
    // setMentors(response.data);
    // })
    // .catch(error => {
    //console.error('There was an error fetching the mentors list!', error);
    // });
    // },


    const submitFeedback = () => {
        axios.post('/api/v1/student/feedback', {
            studentId: studentData._id,
            teacherId: selectedMentor,
            subject: selectedSubject,
            comments: feedback
        })
            .then(response => {
                alert('Feedback submitted successfully.');
                setFeedback('');
                setSelectedMentor('');
            })
            .catch(error => {
                console.error('There was an error submitting the feedback!', error);
            });
    };

    const submitDoubt = () => {
        axios.post('/api/doubts', {
            studentId: studentData._id,
            subject: doubtSubject,
            description: doubt
        })
            .then(response => {
                alert('Doubt submitted successfully.');
                setDoubtSubject('');
                setDoubt('');
            })
            .catch(error => {
                console.error('There was an error submitting the doubt!', error);
            });
    };

    // useEffect(() => {
    // if (selectedSubject) {
    // // axios.get(`/api/v1/teacher/getmeetingnoteslessonnotes?subject=${selectedSubject}`)
    // .then(response => {
    // setMeetingNotes(response.data.notes);
    // })
    // .catch(error => {
    // // console.error('There was an error fetching the notes!', error);
    // });
    // }
    // }, [selectedSubject]);





    return (

        <div className="student-dashboard">
            {/* <pre>
                {JSON.stringify(meetingNotes, null, 2)}
            </pre> */}
            <header className="header">
                <h1>Student Portal</h1>
                <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                    &#9776;
                </button>
            </header>
            <div className="content">
                <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li onClick={() => setMentoring(!mentoring)}>
                            1-1 Mentoring
                            {mentoring && (
                                <div className="dropdown">
                                    <p>Do you want a 1-1 mentoring with a mentor?</p>
                                    <button>Yes</button>
                                    <button>No</button>
                                </div>
                            )}
                        </li>
                        <li>
                            Feedback about a teacher
                            <div className="dropdown">
                                <select onChange={(e) => setSelectedMentor(e.target.value)} value={selectedMentor}>
                                    <option value="">Select Teacher</option>
                                    {mentors && mentors.map((mentor, index) => (
                                        <option key={index} value={mentor._id}>{mentor.name}</option>
                                    ))}
                                </select>
                                <textarea
                                    placeholder="Enter your feedback"
                                    onChange={(e) => setFeedback(e.target.value)}
                                    value={feedback}>
                                </textarea>
                                <button onClick={submitFeedback}>Submit</button>
                            </div>
                        </li>
                        <li>
                            Meeting Notes
                            <div className="dropdown">
                                <h3>All Meeting Notes</h3>
                                {meetingNotes && meetingNotes.map((note, index) => (
                                    <div key={index} className="meeting-note">
                                        <h4>{note.subject}</h4>
                                        <p>{note.notes}</p>
                                    </div>
                                ))}
                            </div>
                        </li>
                        <li>
                            Publish Your Doubt
                            <div className="dropdown">
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    onChange={(e) => setDoubtSubject(e.target.value)}
                                    value={doubtSubject}
                                />
                                <textarea
                                    placeholder="Enter your doubt"
                                    onChange={(e) => setDoubt(e.target.value)}
                                    value={doubt}>
                                </textarea>
                                <button onClick={submitDoubt}>Submit</button>
                            </div>
                        </li>
                    </ul>
                </aside>
                <main className="profile">
                    <h2>Student Profile</h2>
                    <p><strong>Name:</strong> {studentData?.name}</p>
                    <p><strong>Email:</strong>{studentData?.email}</p>
                    {/* <p><strong>Roll No:</strong> {studentData.rollNo}</p> */}
                    {/* <p><strong>Grade:</strong> {studentData.grade}</p> */}
                    {/* <h3>Marks</h3> */}
                    {/* <ul>
                        {Object.keys(studentData.marks).map((subject, index) => (
                            <li key={index}><strong>{subject}:</strong> {studentData.marks[subject]}</li>
                        ))}
                    </ul> */}
                </main>
            </div>
            <footer className="footer">
                <p>&copy; 2024 Student Portal. All rights reserved.</p>
            </footer>
        </div>






















































































    );
};


export default StudentDashboard;
