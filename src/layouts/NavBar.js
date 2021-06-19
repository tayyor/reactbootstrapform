import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar className="mainNav" bg="primary" expand="lg">
        <Navbar.Brand className='logo' href="#home">
          <h1>Haphyz</h1></Navbar.Brand>
        <Nav className="ml-auto head">
          <Nav.Link href="#home">
            <h5>Home</h5>
          </Nav.Link>
          <Nav.Link href="#link">
            <h5>Link</h5>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
