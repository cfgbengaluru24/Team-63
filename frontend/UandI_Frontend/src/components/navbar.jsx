import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CustomNavbar() {
  const handleDropdownChange = (event) => {
    const selectedUrl = event.target.value;
    if (selectedUrl) {
      window.location.href = selectedUrl;
    }
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Be the Change</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#gram-panchayats">Home</Nav.Link>
            <Nav.Link href="https://www.chatbot.com/preview/?widgetId=66a531c2692d6400077eef62">About us</Nav.Link>
            <Nav.Link href="https://www.canva.com/design/DAFoZ6QwNvA/M_BRCX1vMPIU_pLPGbOK5g/view?website#2:c-mmunities-of-change">Impact Report</Nav.Link>
            <Nav.Item>
              <select id="navbarDropdown" className="form-control btn btn-primary" onChange={handleDropdownChange}>
                <option value="">Login</option>
                <option value="http://localhost:5176/">Admin</option>
                <option value="http://localhost:5175/">Teacher</option>
                <option value="http://localhost:5174/">Student</option>
              </select>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
