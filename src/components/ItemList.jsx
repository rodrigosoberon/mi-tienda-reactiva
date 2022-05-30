import Item from "./Item";
import { Container, Row } from "react-bootstrap";
import image from "../images/tablet.jpg";

function ItemList({itemsCarrito, setItemsCarrito}) {
  return (
    <Container fluid>
      <Row>
        <Item title={'Lenovo Tab K10'} description={'PANTALLA: LCD 10,3" Full HD+ DIMENSIONES Y PESO: 244 x 153 x 8,1 mm 460 g.'} price={25000} available={4} image={image} itemsCarrito={itemsCarrito} setItemsCarrito={setItemsCarrito}/>
        <Item title={'Lenovo Tab K10'} description={'PANTALLA: LCD 10,3" Full HD+ DIMENSIONES Y PESO: 244 x 153 x 8,1 mm 460 g.'} price={25000} available={4} image={image} itemsCarrito={itemsCarrito} setItemsCarrito={setItemsCarrito}/>
        <Item title={'Lenovo Tab K10'} description={'PANTALLA: LCD 10,3" Full HD+ DIMENSIONES Y PESO: 244 x 153 x 8,1 mm 460 g.'} price={25000} available={4} image={image} itemsCarrito={itemsCarrito} setItemsCarrito={setItemsCarrito}/>
      </Row>
    </Container>
  );
}

export default ItemList;
