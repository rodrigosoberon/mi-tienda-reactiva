import { useState, useEffect } from "react";
import { pedirDatos } from "../mock/PedirDatos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Spinner, Container } from "react-bootstrap";

function ItemDetailContainer({ itemsCarrito, setItemsCarrito }) {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams(); // * Capturo el numero de la url

  useEffect(() => {
    setLoading(true);

    pedirDatos()
      .then((resp) => {
        setItem(resp.find((item) => item.id === itemId));
        console.log(item);
      })
      .catch((error) => {
        console.log("ERROR", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container className="m-5">
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <ItemDetail
          item={item}
          itemsCarrito={itemsCarrito}
          setItemsCarrito={setItemsCarrito}
        />
      )}
    </Container>
  );
}

export default ItemDetailContainer;
