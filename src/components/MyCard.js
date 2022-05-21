import { Card, Button, Container } from "react-bootstrap";
import image from "../images/tablet.jpg";

function MyCard() {
  return (
    <Card style={{ width: "18rem" }} className="">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Lenovo TAB K10</Card.Title>
        <Card.Text>
          PANTALLA: LCD 10,3" Full HD+ DIMENSIONES Y PESO: 244 x 153 x 8,1 mm
          460 g.
        </Card.Text>
          <Card.Subtitle className="text-end fs-3">$25.000</Card.Subtitle>
        <Container className="d-flex justify-content-center">
          <Button variant="dark" className="mt-3">
            Agregar al carrito
          </Button>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
