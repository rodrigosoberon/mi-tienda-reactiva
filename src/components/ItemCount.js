import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const ItemCount = ({ available, initial }) => {
  let [counter, setCounter] = useState(initial);
  let [isDisable, setDisable] = useState(false);

  const increment = () => {
    if (counter == available - 1) {
      setDisable(true);
    }
    if (counter < available) {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    counter > 0 ? setCounter(counter - 1) : setCounter(counter);
    setDisable(false);
  };

  return (
    <Container className="my-3">
      <Container className="d-flex justify-content-around align-items-center">
        <Button variant="dark" onClick={increment} disabled={isDisable}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <h5>{counter}</h5>
        <Button variant="dark" onClick={decrement}>
          <FontAwesomeIcon icon={faMinus} />
        </Button>
      </Container>
      <Button variant="dark" className="mt-3">Agregar al carrito</Button>
    </Container>
  );
};

export default ItemCount;
