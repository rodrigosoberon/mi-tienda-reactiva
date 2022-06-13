import { Cart, CartFill } from "react-bootstrap-icons";
import { Container, Badge } from "react-bootstrap";
import {CartContext, useCartContext} from '../context/cartContext'

function CartWidget() {
  const {totalQuantity} = useCartContext()
  if (totalQuantity()) {
    return (
      <div>
        <CartFill color="AliceBlue" size={26} />
        <span className="position-absolute translate-middle badge rounded-pill bg-info text-dark">
          {totalQuantity()}
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
