import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Nav } from 'react-bootstrap';

function CartWidget(){
    return(
        <Nav.Link href="#" style={{color: "white"}}>
            <FontAwesomeIcon icon={faCartShopping}/>
        </Nav.Link>
    )
}

export default CartWidget;



