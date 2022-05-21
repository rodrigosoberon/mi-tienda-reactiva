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

    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <a className="navbar-brand" href="#">
    //     <img src={logo} width={30} height={30} />
    //     Mi tienda reactiva
    //   </a>
    //   <button
    //     class="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarNav"
    //     aria-controls="navbarNav"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span class="navbar-toggler-icon"></span>
    //   </button>
    //   <div class="collapse navbar-collapse" id="navbarNav">
    //     <ul class="navbar-nav">
    //       <li class="nav-item active">
    //         <a class="nav-link" href="#">
    //           Inicio <span class="sr-only">(current)</span>
    //         </a>
    //       </li>
    //       <li class="nav-item dropdown">
    //         <a
    //           class="nav-link dropdown-toggle"
    //           href="#"
    //           id="navbarDropdownMenuLink"
    //           data-toggle="dropdown"
    //           aria-haspopup="true"
    //           aria-expanded="false"
    //         >
    //           Categorías
    //         </a>
    //         <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    //           <a class="dropdown-item" href="#">
    //             Televisores
    //           </a>
    //           <a class="dropdown-item" href="#">
    //             Celulares y tablets
    //           </a>
    //           <a class="dropdown-item" href="#">
    //             Notebooks
    //           </a>
    //           <a class="dropdown-item" href="#">
    //             Cámaras
    //           </a>
    //         </div>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" href="#">
    //           Ofertas
    //         </a>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" href="#">
    //           Contacto
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
}

export default NavBar;
