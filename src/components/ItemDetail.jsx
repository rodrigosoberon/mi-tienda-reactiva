import ItemCount from "./ItemCount";
import { Container, Row, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";

function ItemDetail({ item }) {
  const { addItem, isInCart, cart } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const handleAgregar = () => {
    const itemToCart = {
      ...item,
      cantidad,
    };
    addItem(itemToCart);
  };

  return (
    <Row>
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.nombre} />
      <p className="py-2 fs-5">{item.description}</p>
      <h3 className="fs-2 text-center bg-secondary text-light py-2">{`$ ${item.price}`}</h3>
      <Container fluid className="my-3">
        {isInCart(item.id) ? (
          <Alert variant="success">
            <p>El producto se agregó a su carrito de compras!</p>
            <div className="d-flex justify-content-end">
              <Alert.Link as={Link} to="/cart" className="fs-5">
                Ver compra
              </Alert.Link>
            </div>
          </Alert>
        ) : item.available ? (
          <ItemCount
            available={item.available}
            counter={cantidad}
            setCounter={setCantidad}
            handleAgregar={handleAgregar}
          />
        ) : (
          <Alert variant="danger">
            <Alert.Heading>No disponible</Alert.Heading>
            <p>
              Este producto se encuentra agotado actualmente. Esperamos
              reponerlo a la brevedad. Por favor, vuelva a consultar más tarde.
            </p>
            <div className="d-flex justify-content-end">
              <Alert.Link as={Link} to="/" className="fs-5">
                Seguir comprando
              </Alert.Link>
            </div>
          </Alert>
        )}
      </Container>
    </Row>
  );
}

export default ItemDetail;
