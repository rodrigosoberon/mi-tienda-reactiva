import { Container } from "react-bootstrap";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../mock/PedirDatos";
import {Spinner} from 'react-bootstrap'

function ItemListContainer({ itemsCarrito, setItemsCarrito }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    pedirDatos()
      .then((resp) => {
        if (!categoryId) {
          setItems(resp);
        } else {
          setItems(resp.filter((item) => item.category === categoryId));
        }
      })
      .catch((error) => {
        console.log("ERROR", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <Container fluid className="my-3">
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <ItemList items={items} itemsCarrito={itemsCarrito} setItemsCarrito={setItemsCarrito}/>
      )}
    </Container>
  );
}

export default ItemListContainer;
