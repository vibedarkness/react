import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaPowerOff, FaCookieBite } from "react-icons/fa";

function MonNavbar({ backgroundColor }) {
  return (
    <>
      <Navbar style={{ backgroundColor: backgroundColor }} expand="lg">
        <Container fluid>
          <Navbar.Brand
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "#0B2403FF",
              fontFamily: "'Pacifico', cursive", // Utilisation de Dancing Script
            }}
          >
            <FaCookieBite style={{ marginRight: "8px" }} />
            LES DELICES DE MAMISHU
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0 justify-content-center"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" style={{
              display: "flex",
              alignItems: "center",
              fontSize: "1.2rem",
              color: "#0B2403FF",
              fontFamily: "'Pacifico', cursive", // Utilisation de Dancing Script
            }}>Accueil</Nav.Link>
              <NavDropdown style={{
              display: "flex",
              alignItems: "center",
              fontSize: "1.2rem",
              color: "#0B2403FF",
              fontFamily: "'Pacifico', cursive", // Utilisation de Dancing Script
            }} title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Africaine</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Européene
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Asiatique
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Americaine
                </NavDropdown.Item>
                
                
              </NavDropdown>
            </Nav>

            <div style={{ marginLeft: "20px" }}>
              <Nav.Link href="/login">
                <FaPowerOff
                  style={{ cursor: "pointer", fontSize: "1.5rem" }}
                />
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

// Validation des props
MonNavbar.propTypes = {
  backgroundColor: PropTypes.string,
};

export default MonNavbar;
