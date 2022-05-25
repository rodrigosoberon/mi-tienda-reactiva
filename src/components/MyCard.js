import { Card, Button } from "react-bootstrap";
import image from "../images/tablet.jpg";
import ItemCount from "./ItemCount";

function MyCard() {
  return (
    <Card style={{ width: "18rem" }} className="m-2">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Lenovo TAB K10</Card.Title>
        <Card.Text>
          PANTALLA: LCD 10,3" Full HD+ DIMENSIONES Y PESO: 244 x 153 x 8,1 mm
          460 g.
        </Card.Text>
        <Card.Subtitle className="text-end fs-3">$25.000</Card.Subtitle>
        <ItemCount initial={0} available={3} />
      </Card.Body>
    </Card>
  );
}

export default MyCard;
