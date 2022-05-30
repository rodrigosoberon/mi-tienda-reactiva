import { Container, Button } from "react-bootstrap";
import ItemList from "./ItemList";

function ItemListContainer({ itemsCarrito, setItemsCarrito }) {
  // function incrementarCarrito() {
  //   setItemsCarrito(itemsCarrito + 1);
  // }
  return (
    <Container fluid className="my-3">
      {/* <Button onClick={incrementarCarrito}>Click</Button> */}
      <ItemList itemsCarrito={itemsCarrito} setItemsCarrito={setItemsCarrito}/>
    </Container>
  );
}

export default ItemListContainer;
