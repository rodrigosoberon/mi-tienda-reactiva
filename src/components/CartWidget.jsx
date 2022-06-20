import { Cart, CartFill } from "react-bootstrap-icons";
import { Container, Badge } from "react-bootstrap";
import { CartContext, useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { totalQuantity } = useCartContext();
  if (totalQuantity()) {
    return (
      <Link to="/cart">
        <CartFill color="AliceBlue" size={26} />
        <span className="position-absolute translate-middle badge rounded-pill bg-info text-dark">
          {totalQuantity()}
        </span>
      </Link>
    );
  } else {
    return (
      <Link to="/cart">
        <Cart color="AliceBlue" size={26} />
      </Link>
    );
  }
}

export default CartWidget;
