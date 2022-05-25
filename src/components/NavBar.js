import logo from "../logo.svg";
import CartWidget from "./CartWidget"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <img alt="" src={logo} width="40" height="40" className="d-inline-block align-top"/>{" "}
        <Navbar.Brand href="#">Mi tienda reactiva</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Televisores</NavDropdown.Item>
              <NavDropdown.Item href="#">Celulares y Tablets</NavDropdown.Item>
              <NavDropdown.Item href="#">Notebooks</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#">Camaras</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Ofertas</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default NavBar;
