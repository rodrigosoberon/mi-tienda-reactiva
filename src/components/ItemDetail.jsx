import ItemCount from "./ItemCount";
import { Container } from "react-bootstrap";

function ItemDetail({ item, itemsCarrito, setItemsCarrito }) {
  return (
    <Container className="m-5">
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.nombre} />
      <p>{item.description}</p>
      <h3>{`$ ${item.price}`}</h3>
      <ItemCount
        initial={0}
        available={item.available}
        itemsCarrito={itemsCarrito}
        setItemsCarrito={setItemsCarrito}
      />
    </Container>
  );
}

export default ItemDetail;
