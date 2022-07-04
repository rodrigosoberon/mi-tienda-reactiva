import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ItemCard({ title, description, price, image, id }) {
  return (
    <Card style={{ width: "18rem" }} className="m-2 p-0">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="bg-secondary text-light">
        <div className="text-center fs-3">{`$ ${price}`}</div>
      </Card.Footer>
      <Link to={`/item/${id}`} className="text-center">
        <Button variant="dark" className="m-3">
          Ver detalle
        </Button>
      </Link>
    </Card>
  );
}

export default ItemCard;
