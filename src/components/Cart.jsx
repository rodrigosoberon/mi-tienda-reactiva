import { useCartContext } from "../context/CartContext";
import {Container, Button} from 'react-bootstrap'
import {Link} from "react-router-dom"

function Cart() {
    const {cart, totalPrice, removeItem} = useCartContext();
    console.log(cart);
    if(cart.length === 0) return (
        <Container>
            <h2>Carrito de compras vacío</h2>
            <Link to="/">Volver a inicio</Link>
        </Container>
    )
    return ( 
        <Container>
            <h1>Carrito de compras</h1>
            <hr />
            {
                cart.map((item) => (
                    <Container>
                        <h3>{item.title}</h3>
                        <p>Cantidad en carrito: {item.cantidad}</p>
                        <p>Subtotal: ${item.price * item.cantidad}</p>
                        <Button variant="danger" onClick={() => removeItem(item.id)}>Quitar producto</Button>
                        <hr/>
                    </Container>
                ))
            }
            <h4>Total compra: ${totalPrice()}</h4>
        </Container>
     );
}

export default Cart;