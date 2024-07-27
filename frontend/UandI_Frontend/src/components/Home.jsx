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

      </div>
  );
}
