import React from 'react';
import './Home.css'; // Import your custom CSS

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">Be the Change</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#gram-panchayats">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#water-user-committee">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pipelines">Impact Report</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#fees-collection">Fees Collection</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link btn btn-primary" href="/portal/login">Login Panel</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="hero-section">
        <div className="overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to Dhulikona Foundation</h1>
            <p className="mb-4">Empowering Villages, Transforming Lives</p>
            <p>Uttar Pradesh, located in the northern part of India, is renowned for its rich cultural heritage and vibrant village life. Here, amidst serene landscapes, traditional homes, and bustling agricultural fields, life flourishes in harmony with nature. Festivals and community gatherings punctuate the rhythm of village life, fostering a strong sense of community and belonging. Discover the essence of Uttar Pradesh villages through our collection of captivating images.</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container content-section">
        <div className="row">
          {/* Grid Items with Images and Descriptions */}
          <div className="col-md-6 col-lg-3 grid-item">
            <img src="images/up1.jpg" className="img-fluid" alt="Traditional Festivals" />
            <p>Traditional Festivals</p>
          </div>
          <div className="col-md-6 col-lg-3 grid-item">
            <img src="images/up2.jpg" className="img-fluid" alt="Agricultural Fields" />
            <p>Agricultural Fields</p>
          </div>
          <div className="col-md-6 col-lg-3 grid-item">
            <img src="images/up3.jpeg" className="img-fluid" alt="Rural Homes" />
            <p>Rural Homes</p>
          </div>
          <div className="col-md-6 col-lg-3 grid-item">
            <img src="images/up4.jpeg" className="img-fluid" alt="Community Celebrations" />
            <p>Community Celebrations</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Dhulikona Foundation. All Rights Reserved.</p>
          <div className="social-icons">
            <a href="#" className="me-2"><i className="fab fa-facebook"></i></a>
            <a href="#" className="me-2"><i className="fab fa-twitter"></i></a>
            <a href="#" className="me-2"><i className="fab fa-instagram"></i></a>
          </div>
          <p><a href="#">Contact Us</a></p>
        </div>
      </footer>
    </div>
  );
}
