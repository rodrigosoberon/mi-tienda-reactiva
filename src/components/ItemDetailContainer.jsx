import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Spinner, Container, Row, Col } from "react-bootstrap";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams(); // * Capturo el numero de la url

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "items", itemId);
    getDoc(docRef)
      .then((doc) => {
        setItem({ id: doc.id, ...doc.data() });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container fluid className="mt-3">
      <Row className="justify-content-center">
        <Col sm={8} md={4} lg={3}>
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            <ItemDetail item={item} />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDetailContainer;
