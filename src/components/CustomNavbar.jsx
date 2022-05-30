import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Shop } from 'react-bootstrap-icons';
import CartWidget from "./CartWidget";

function CustomNavbar({itemsCarrito}) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Shop color="#0dcaf0" className="mx-3 fs-2"/>
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
        <CartWidget itemsCarrito={itemsCarrito}/>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
