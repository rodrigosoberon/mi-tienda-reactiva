import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Shop } from "react-bootstrap-icons";
import CartWidget from "./CartWidget";

function CustomNavbar({ itemsCarrito }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Shop color="#0dcaf0" className="mx-3 fs-2" />
        <Link to="/">
          <Navbar.Brand>Mi Tienda</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/"><Nav.Link href="Inicio">Inicio</Nav.Link></Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <Link to="/categorias/televisores">
                <NavDropdown.Item href="Televisores">Televisores</NavDropdown.Item>
              </Link>
              <Link to="/categorias/tablets">
                <NavDropdown.Item href="Tablets">Tablets</NavDropdown.Item>
              </Link>
              <Link to="/categorias/notebooks">
                <NavDropdown.Item href="Notebooks">Notebooks</NavDropdown.Item>
              </Link>
              <Link to="/categorias/celulares">
                <NavDropdown.Item href="Celulares">Celulares</NavDropdown.Item>
              </Link>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
            <Nav.Link href="#">Ofertas</Nav.Link>
            <Link to="/contacto"><Nav.Link href="Contacto">Contacto</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget itemsCarrito={itemsCarrito} />
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
