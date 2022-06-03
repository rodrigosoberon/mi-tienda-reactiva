import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import {Link} from 'react-router-dom'
import { Shop } from 'react-bootstrap-icons';
import CartWidget from "./CartWidget";

function CustomNavbar({itemsCarrito}) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Shop color="#0dcaf0" className="mx-3 fs-2"/>
        <Navbar.Brand><Link to='/'>Mi Tienda</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to='/'>Inicio</Link></Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to='/categorias/Televisor'>Televisores</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to='/categorias/Tablet'>Tablets</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to='/categorias/Notebook'>Notebooks</Link></NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item><Link to='/categorias/Celular'>Celulares</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Ofertas</Nav.Link>
            <Nav.Link className=".text-decoration-none"><Link to='/contacto'>Contacto</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget itemsCarrito={itemsCarrito}/>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
