const ItemDetail = ({ productos }) => {
  return (
    <ul>
      <>
        <li>{productos.nombre}</li>
        <li>{productos.indice}</li>
        <li>${productos.precio}</li>
      </>
    </ul>
  );
};

export default ItemDetail;
