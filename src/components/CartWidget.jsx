import { Cart, CartFill } from "react-bootstrap-icons";
import { Container, Badge } from "react-bootstrap";

function CartWidget({ itemsCarrito }) {
  if (itemsCarrito) {
    return (
      <div>
        <CartFill color="AliceBlue" size={26} />
        <span className="position-absolute translate-middle badge rounded-pill bg-info text-dark">
          {itemsCarrito}
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <Cart color="AliceBlue" size={26} />
      </div>
    );
  }
}

export default CartWidget;
