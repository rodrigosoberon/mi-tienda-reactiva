import ItemCard from "./ItemCard";
import { Spinner, Container, Row } from "react-bootstrap";

import { pedirDatos } from "../mock/PedirDatos";
import { useEffect, useState } from "react";

function ItemList({ items, itemsCarrito, setItemsCarrito }) {


  return (
    <Container fluid>
      <Row className="justify-content-center">
        {items.map((p) => (
            <ItemCard
              key={p.id}
              title={p.title}
              description={p.description}
              price={p.price}
              available={p.available}
              image={p.image}
              itemsCarrito={itemsCarrito}
              setItemsCarrito={setItemsCarrito}
            />
          ))
        }
      </Row>
    </Container>
  );
}

export default ItemList;
