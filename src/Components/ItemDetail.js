const ItemDetail = ({ productos }) => {
  return (
    <ul>
      {productos.map((producto, indice) => {
        return (
          <>
            <li>{producto.nombre}</li>
            <li>{producto.indice}</li>
            <li>${producto.precio}</li>
          </>
        );
      })}
    </ul>
  );
};

export default ItemDetail;
