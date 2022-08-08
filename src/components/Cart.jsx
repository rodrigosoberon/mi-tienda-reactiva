import { useCartContext } from "../context/cartContext";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, totalPrice, removeItem } = useCartContext();
  if (cart.length === 0)
    return (
      <Container>
        <h2>Carrito de compras vacío</h2>
        <Link to="/">Volver a inicio</Link>
      </Container>
    );

  return (
    <Container>
      <h1>Carrito de compras</h1>
      <hr />
      {cart.map((item) => (
        <Container>
          <h3>{item.title}</h3>
          <p>Cantidad en carrito: {item.quantity}</p>
          {item.discount && <p>Descuento aplicado: % {item.discount} </p>}
          <p>
            Subtotal: $
            {item.discount
              ? Math.round(
                  item.price * item.quantity * ((100 - item.discount) / 100)
                )
              : item.price * item.quantity}
          </p>
          <Button variant="danger" onClick={() => removeItem(item.id)}>
            Quitar producto
          </Button>
          <hr />
        </Container>
      ))}
      <h4>Total compra: ${Math.round(totalPrice())}</h4>
      <Button as={Link} to="/checkout">
        Finalizar compra
      </Button>
    </Container>
  );
}

export default Cart;
