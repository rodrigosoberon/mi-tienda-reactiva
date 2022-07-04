import ItemCount from "./ItemCount";
import { Container , Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";

function ItemDetail({ item }) {
  const { addItem, isInCart, cart } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const handleAgregar = () => {
    const itemToCart = {
      ...item,
      cantidad
    }
    addItem(itemToCart)
  };

  return (
    <Row md={{ span: 4, offset: 4 }} className="justify-content-center">
    <Container fluid className="">
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.nombre} />
      <p>{item.description}</p>
      <h3>{`$ ${item.price}`}</h3>

      {isInCart(item.id) ? (
        <Link to="/cart">Terminar compra</Link>
      ) : (
        <ItemCount
          available={item.available}
          counter={cantidad}
          setCounter={setCantidad}
          handleAgregar={handleAgregar}
        />
      )}
    </Container>
    </Row>
  );
}

export default ItemDetail;
