import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ItemCard({ title, description, price, image, id}) {
  return (
    <Card style={{ width: "18rem" }} className="m-2">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Subtitle className="text-end fs-3">{ `$ ${price}`}</Card.Subtitle>
        <Link to={`/item/${id}`}>
          <Button variant="dark" className="mt-3">
            Ver detalle
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
