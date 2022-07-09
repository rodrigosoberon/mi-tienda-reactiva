import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { Shop } from "react-bootstrap-icons";
import CartWidget from "./CartWidget";

function CustomNavbar({ itemsCarrito }) {
  return (
    <Container fluid className="p-0 py-2 bg-dark">
      <Row className="m-0">
        <Col xs="10">
          <Navbar expand="sm" bg="dark" variant="dark" className="">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Shop color="#0dcaf0" size={36} className="mx-3" />
            <Navbar.Brand as={Link} to="/">
              Mi Tienda
            </Navbar.Brand>

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

                  <NavDropdown.Item as={Link} to="/categorias/phone">
                    Celulares
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/categorias/ofertas">Ofertas</Nav.Link>
                <Nav.Link as={Link} to="/contacto" href="Contacto">
                  Contacto
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
        <Col xs="2" className="d-flex justify-content-end pt-1 my-2 pe-4">
          <CartWidget itemsCarrito={itemsCarrito} />
        </Col>
      </Row>
    </Container>
  );
}

export default CustomNavbar;
