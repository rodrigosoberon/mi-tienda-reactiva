import ItemCount from "./ItemCount";
import { Container, Row, Alert, Badge } from "react-bootstrap";
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

  const discountPrice = Math.round(item.price * (100 - item.discount) / 100);

  return (
    <Row>
      <h2>
        {item.title}
        {item.discount && (
          <Badge className="ms-1" bg="info">
            {item.discount}% off!
          </Badge>
        )}
      </h2>
      <img src={item.image} alt={item.title} />
      <p className="py-2 fs-5">{item.description}</p>
      {item.discount ? (
        <div className="bg-info d-flex flex-row justify-content-center align-items-center gap-2 py-2">
          <div className="fs-2 text-light ">{`$ ${discountPrice}`}</div>
          <div className="text-black-50 text-decoration-line-through">{`$ ${item.price}`}</div>
        </div>
      ) : (
        <h3 className="fs-2 text-center bg-secondary text-light py-2">{`$ ${item.price}`}</h3>
      )}

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
