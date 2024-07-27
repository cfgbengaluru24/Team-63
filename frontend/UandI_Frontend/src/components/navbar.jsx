import React from 'react';
import './Home.css';

export default function navbar() {
  return (
    
    <>
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

</>
  )
}
