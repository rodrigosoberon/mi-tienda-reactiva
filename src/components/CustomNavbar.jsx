import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Shop } from "react-bootstrap-icons";
import CartWidget from "./CartWidget";

function CustomNavbar({ itemsCarrito }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Shop color="#0dcaf0" className="mx-3 fs-2" />
        <Navbar.Brand as={Link} to="/">
          Mi Tienda
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/categorias/tv">
                Televisores
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/categorias/tablet">
                Tablets
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/categorias/notebook">
                Notebooks
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/categorias/phone"
              >
                Celulares
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Ofertas</Nav.Link>
            <Nav.Link as={Link} to="/contacto" href="Contacto">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget itemsCarrito={itemsCarrito} />
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
