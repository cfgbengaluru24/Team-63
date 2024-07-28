import React from 'react';
import './Home.css'; // Import your custom CSS
// import navbar from './navbar';

export default function Home() {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="hero-section">
        <div className="overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Welcome!</h1>
            <p className="mb-4">Empowering Futures: Education, Mentorship, and Social Impact with U&I</p>
            
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container content-section">
        <div className="row">
          {/* Grid Items with Images and Descriptions */}
          <div className="col-md-6 col-lg-3 grid-item">
            <img src='https://optim.tildacdn.one/tild3035-6132-4933-b432-363331323466/-/format/webp/Untitled_design_31.png' className="img-fluid" alt="Volunteer" />
            <p>Volunteer</p>
          </div>
          <div className="col-md-6 col-lg-3 grid-item">
            <img src='https://optim.tildacdn.one/tild6634-3037-4265-b239-333336356233/-/format/webp/Untitled_design_33.png' className="img-fluid" alt="Be the Change Movement" />
            <p>Be the Change Movement</p>
          </div>
          <div className="col-md-6 col-lg-3 grid-item">
            <img src='/src/images/Untitled_design_24.png' className="img-fluid" alt="Rural HomesAspiring the Weak" />
            <p>Aspiring the Weak</p>
          </div>
          <div className="col-md-6 col-lg-3 grid-item">
            <img src='/src/images/Untitled_design_24.png' className="img-fluid" alt="Our Motivation" />
            <p>Our Motivation</p>
          </div>
        </div>
      </div>

   </div>
);
}