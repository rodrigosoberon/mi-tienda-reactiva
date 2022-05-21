import logo from "../logo.svg";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        <Navbar.Brand href="#">Mi tienda reactiva</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Ofertas</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
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
