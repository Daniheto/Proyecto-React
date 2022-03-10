import Item from "./Item";

const ItemList = (producto) => {
  return (
    <ul>
      {productos.map((producto, indice) => {
        return <Item />;
      })}
    </ul>
  );
};

export default ItemList;
