import ItemCount from "./ItemCount";
import { useContext } from "react";
import { contexto } from "./CartContext";

export const ItemDetail = ({ productos }) => {
  const { addItem } = useContext(contexto);

  const onAdd = (contador) => {
    addItem(productos, contador);
  };

  return (
    <>
      <article>
        <h2>{productos.nombre}</h2>
        <img src={productos.imagen} />
        <p>${productos.precio}</p>
      </article>
      <ItemCount initial={1} onAdd={onAdd} stock={5} />
    </>
  );
};

export default ItemDetail;
