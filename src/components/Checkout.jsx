import { useState } from "react";
import { useCartContext } from "../context/cartContext";
import { Navigate } from "react-router-dom";
import {
  collection,
  getDocs,
  addDoc,
  writeBatch,
  query,
  where,
  documentId,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { Container, Form, Button } from "react-bootstrap";

function Checkout() {
  const { cart, totalPrice, emptyCart } = useCartContext();

  const [orderId, setOrderId] = useState(null);
  const [values, setValues] = useState({
    nombre: "",
    email: "",
    direccion: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orden = {
      buyer: values,
      items: cart.map(({ id, quantity, title, price }) => ({
        id,
        quantity,
        title,
        price,
      })),
      total: totalPrice(),
    };

    const batch = writeBatch(db);
    const ordersRef = collection(db, "orders");
    const productosRef = collection(db, "items");
    const q = query(
      productosRef,
      where(
        documentId(),
        "in",
        cart.map((item) => item.id)
      )
    );

    const outOfStock = [];
    const productos = await getDocs(q);

    productos.docs.forEach((doc) => {
      const itemToUpdate = cart.find((prod) => prod.id === doc.id);

      if (doc.data().available - itemToUpdate.quantity >= 0) {
        batch.update(doc.ref, {
          available: doc.data().available - itemToUpdate.quantity,
        });
      } else {
        outOfStock.push(itemToUpdate);
      }
    });

    if (outOfStock.length === 0) {
      addDoc(ordersRef, orden).then((doc) => {
        batch.commit();
        setOrderId(doc.id);
        emptyCart();
      });
    } else {
      console.log(outOfStock);
      alert("Hay items sin stock");
    }
  };

  if (orderId) {
    return (
      <div className="container my-5">
        <h2>Gracias por su compra!</h2>
        <hr />
        <p>Su número de orden es:</p>
        <h3>{orderId}</h3>
      </div>
    );
  }

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      <h2>Checkout</h2>
      <hr />

      <Form onSubmit={handleSubmit} className="mb-3">
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre y Apellido:</Form.Label>
          <Form.Control
            value={values.nombre}
            name="nombre"
            onChange={handleInputChange}
            type="text"
            placeholder="Juan Perez"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Correo electrónico:</Form.Label>
          <Form.Control
            value={values.email}
            name="email"
            onChange={handleInputChange}
            type={"email"}
            placeholder="email@email.com"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="direccion">
          <Form.Label>Dirección de envío:</Form.Label>
          <Form.Control
            value={values.direccion}
            name="direccion"
            onChange={handleInputChange}
            type={"text"}
            placeholder="Dirección de envío"
            required
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Enviar
        </Button>
      </Form>
      <Button onClick={emptyCart} variant="danger">
        Cancelar mi compra
      </Button>
    </Container>
  );
}

export default Checkout;
