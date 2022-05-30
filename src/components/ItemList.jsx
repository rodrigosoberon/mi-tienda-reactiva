import Item from "./Item";
import { Spinner, Container, Row } from "react-bootstrap";
import image from "../images/ipad.webp";
import { pedirDatos } from "../mock/PedirDatos";
import { useEffect, useState } from "react";

function ItemList({ itemsCarrito, setItemsCarrito }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    pedirDatos()
      .then((datos) => {
        setProductos(datos);
      })
      .catch((error) => {
        console.log("Se produjo el error: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container fluid>
      <Row className="justify-content-center">
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          productos.map((p) => (
            <Item
              key={p.id}
              title={p.title}
              description={p.description}
              price={p.price}
              available={p.available}
              image={image}
              itemsCarrito={itemsCarrito}
              setItemsCarrito={setItemsCarrito}
            />
          ))
        )}
      </Row>
    </Container>
  );
}

export default ItemList;
