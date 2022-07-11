import { Container } from "react-bootstrap";
function Contacto() {
  return (
    <Container className="my-5">
      <h2>Contacto</h2>
      <hr />
      <p className="fs-3">
        📧{" "}
        <a href="mailto: contacto@mitiendareactiva.com">
          contacto@mitiendareactiva.com
        </a>
      </p>
      <p className="fs-3">📱 +54 911 6790 8000</p>
      <p className="fs-3">
        📌{" "}
        <a href="https://goo.gl/maps/1ftijZZVZfyz6wUp8">
          Av. Cordoba 1890, C.A.B.A.
        </a>{" "}
      </p>
    </Container>
  );
}

export default Contacto;
