import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";

function ItemCard({ title, description, price, available, image, itemsCarrito, setItemsCarrito }) {
  return (
    <Card style={{ width: "18rem" }} className="m-2">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Subtitle className="text-end fs-3">{"$ " + price}</Card.Subtitle>
        {/* <ItemCount initial={0} available={available} itemsCarrito={itemsCarrito} setItemsCarrito={setItemsCarrito}/> */}
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
