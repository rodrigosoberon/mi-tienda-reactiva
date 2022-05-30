import { Container, Button } from "react-bootstrap";
import { Plus, Dash } from "react-bootstrap-icons";
import { useState } from "react";

function ItemCount({ initial, available, itemsCarrito, setItemsCarrito }) {
  let [counter, setCounter] = useState(initial);
  let [isPlusDisable, setPlusDisable] = useState(false);
  let [isDashDisable, setDashDisable] = useState(true);

  const increment = () => {
    setDashDisable(false);
    if (counter == available - 1) {
      setPlusDisable(true);
    }
    if (counter < available) {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter == 1 ) {
      setDashDisable(true);
    }
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(counter);
      setDashDisable(true);
    }
    setPlusDisable(false);
  };


// TODO: Armar logica para que NO se puedan agregar mas items cuando ya se haya agregado la cantidad total disponible de un item particular
  const agregarCarrito = () => {
    setItemsCarrito(itemsCarrito + counter)
  }

  return (
    <Container className="my-3">
      <Container className="d-flex justify-content-around align-items-center">
        <Button variant="dark" onClick={increment} disabled={isPlusDisable}>
          <Plus />
        </Button>
        <h5>{counter}</h5>
        <Button variant="dark" onClick={decrement} disabled={isDashDisable}>
          <Dash />
        </Button>
      </Container>
      <Container className="d-flex justify-content-center">
        <Button variant="dark" className="mt-3" onClick={agregarCarrito}>
          Agregar al carrito
        </Button>
      </Container>
    </Container>
  );
}

export default ItemCount;
