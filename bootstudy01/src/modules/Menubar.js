import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';

function Menubar() {
  return (
    <>
    <Navbar bg="primary" variant="dark">
    <Container>
        <Navbar.Brand as={Link} to="/">비트교육센터</Navbar.Brand>
        <Nav className="me-auto">
          <Navbar.Collapse className="basic-navbar-nav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/intro">Intro</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/emp">List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/addEmp">Add</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/logout">Logout</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/join">Join</Link>
              </li>
            </ul>
          </Navbar.Collapse>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default Menubar