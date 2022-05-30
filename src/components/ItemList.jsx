import Item from "./Item";
import { Container, Stack, Row } from "react-bootstrap";

function ItemList() {
  return (
    <Container fluid>
      <Row>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Row>
    </Container>
  );
}

export default ItemList;
