import { Container, Button } from "react-bootstrap";
import { Plus, Dash } from "react-bootstrap-icons";
import { useState } from "react";

function ItemCount({ available, setCounter, counter, handleAgregar}) {

  let [isPlusDisable, setPlusDisable] = useState(available == 1 ? true : false);
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
    if (counter == 2 ) {
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

  return (
    <Container fluid className="">
      <Container fluid className="d-flex justify-content-around align-items-center p-0">
        <Button variant="dark" onClick={decrement} disabled={isDashDisable}>
          <Dash />
        </Button>
        <h5>{counter}</h5>
        <Button variant="dark" onClick={increment} disabled={isPlusDisable}>
          <Plus />
        </Button>
      </Container>

      <Container fluid className="d-flex justify-content-center">
        <Button variant="dark" className="mt-3" onClick={handleAgregar}>
          Agregar al carrito
        </Button>
      </Container>
    </Container>
  );
}

export default ItemCount;
