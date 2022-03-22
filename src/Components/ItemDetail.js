const ItemDetail = ({ productos }) => {
  return (
    <>
      <article>
        <h2>{productos.nombre}</h2>
        <p>{productos.indice}</p>
        <p>${productos.precio}</p>
      </article>
    </>
  );
};

export default ItemDetail;
