import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

function ItemCard({
  title,
  description,
  price,
  image,
  id,
  discount,
  available,
}) {

  const discountPrice = Math.round(price * (100 - discount) / 100);

  return (
    <Card style={{ width: "18rem" }} className="m-2 p-0">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          {title}
          {discount && (
            <Badge className="ms-1" bg="info">
              {discount}% off!
            </Badge>
          )}
          {available == 0 && (
            <Badge className="ms-1" bg="danger">
              Sin stock
            </Badge>
          )}
        </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      {discount ? (
        <Card.Footer className="bg-info d-flex flex-row justify-content-center align-items-center gap-2">
          <div className="text-center fs-3 text-light ">{`$ ${discountPrice}`}</div>
          <div className="text-center  text-black-50 text-decoration-line-through">{`$ ${price}`}</div>
        </Card.Footer>
      ) : (
        <Card.Footer className="bg-secondary text-light">
          <div className="text-center fs-3">{`$ ${price}`}</div>
        </Card.Footer>
      )}
      <Link to={`/item/${id}`} className="text-center">
        <Button variant="dark" className="m-3">
          Ver detalle
        </Button>
      </Link>
    </Card>
  );
}

export default ItemCard;
