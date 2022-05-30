import Item from "./Item";
import { Container, Row } from "react-bootstrap";
import image from "../images/ipad.webp";
import externo from "../productos.json";

function ItemList({ itemsCarrito, setItemsCarrito }) {
  return (
    <Container fluid>
      <Row>
        {externo.productos.map((p) => (
          <Item
            key={p.id}
            title={p.title}
            description={p.description}
            price={p.price}
            available={p.available}
            image={image}
            itemsCarrito={itemsCarrito}
            setItemsCarrito={setItemsCarrito}
          />
        ))}
      </Row>
    </Container>
  );
}

export default ItemList;
