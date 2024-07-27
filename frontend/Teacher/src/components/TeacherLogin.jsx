import React from 'react';
import './TeacherLogin.css'; // Import the CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand"><b>Be the Change</b></a>
          <form className="d-flex" role="search">
            
            {/* Add your login logic here */}
            {true ? ( // Replace true with actual condition for authentication check
              <a className="btn btn-outline-success" type="submit" href="/logout/">Logout</a>
            ) : (
              <a className="btn btn-outline-success" type="submit" href="/login/">Login</a>
            )}
          </form>
        </div>
      </nav>
      <div className="container mt-5">
        <form className="col-6 mx-auto card p-3 shadow-lg" method="post" encType="multipart/form-data">
          <h2 className="text-center">TEACHER LOGIN</h2>
          <hr />
          {/* Add your messages logic here */}
          {false && ( // Replace false with actual condition for messages
            <ul className="messages">
              {['Message 1', 'Message 2'].map((message, index) => ( // Replace with actual messages


                <div className="alert alert-primary" role="alert" key={index}>
                  {message}
                </div>
              ))}
            </ul>
          )}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Email</label>
            <input type="email" name="username" className="form-control" id="username" aria-describedby="usernameHelp" required />
            <div id="usernameHelp" className="form-text">Please enter your Email ID</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" name="password" className="form-control" id="password" required />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" name="remember_me" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <br />
           <p>Don't have an account? <a href="/register/" className="btn btn-primary">Register Here</a></p> 
        </form>
      </div>
    </div>
  );
};

export default Login;