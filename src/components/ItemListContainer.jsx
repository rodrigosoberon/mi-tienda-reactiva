import { Container, Button } from "react-bootstrap";
import ItemList from "./ItemList";

function ItemListContainer({ itemsCarrito, setItemsCarrito }) {

  return (
    <Container fluid className="my-3">

      <ItemList itemsCarrito={itemsCarrito} setItemsCarrito={setItemsCarrito}/>
    </Container>
  );
}

export default ItemListContainer;
