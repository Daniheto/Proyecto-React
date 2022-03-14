const Item = ({ producto }) => {
  return (
    <>
      <li>{producto.nombre}</li>
      <li>Precio: ${producto.precio}</li>
    </>
  );
};

export default Item;
