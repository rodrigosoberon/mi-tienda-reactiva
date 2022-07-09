import ItemCard from "./ItemCard";
import { Container, Row } from "react-bootstrap";

function ItemList({ items }) {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        {items.map((p) => (
          <ItemCard
            key={p.id}
            id = {p.id}
            title={p.title}
            description={p.description}
            price={p.price}
            available={p.available}
            image={p.image}
            discount={p.discount}
          />
        ))}
      </Row>
    </Container>
  );
}

export default ItemList;
