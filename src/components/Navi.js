import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

function Navi() {
  return (
    <BrowserRouter>
      <Navbar
        collapseOnSelect
        bg="dark"
        expand="md"
        defaultActiveKey="/"
        className="navbar navbar-expand-sm navbar-dark px-4"
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center text-center w-100 navbar-nav">
            <Nav.Link>
              <Link class="text-decoration-none text-light" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link class="text-decoration-none text-light" to="/about">
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link class="text-decoration-none text-light" to="contactUs">
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="display">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Navi;
