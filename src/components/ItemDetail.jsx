

function ItemDetail({item}) {
  return (
      <div className="container-fluid m-5">
          <h2>{item.title}</h2>
          <img src={item.image} alt={item.nombre}/>
          <p>{item.description}</p>
          <h3>{item.price}</h3>
      </div>

  );
}

export default ItemDetail;
