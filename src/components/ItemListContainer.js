import { Container } from "react-bootstrap";
import MyCard from "./MyCard";

export const ItemListContainer = ({ greeting }) => {
  return (
    <section className="container">
      <p className="fs-4 text-end">Bienvenido {greeting}</p>
      <h1>Lista de Productos</h1>
      <Container className="d-flex justify-content-around">
        <MyCard />
        <MyCard />
        <MyCard />
      </Container>
    </section>
  );
};
