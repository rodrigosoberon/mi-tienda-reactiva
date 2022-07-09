import { Container } from "react-bootstrap";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const productosRef = collection(db, "items");
    const q = categoryId
      ? query(productosRef, where("category", "==", categoryId))
      : productosRef;
    getDocs(q)
      .then((resp) => {
        const newItems = resp.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setItems(newItems);
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
        <ItemList
          items={items}
        />
      )}
    </Container>
  );
}

export default ItemListContainer;
