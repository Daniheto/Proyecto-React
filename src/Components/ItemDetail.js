import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { contexto } from "./CartContext";

export const ItemDetail = (producto) => {
  const [seleccionado, setSeleccionado] = useState(false);
  const { addItem, cart } = useContext(contexto);

  const onAdd = (unidadSeleccionada) => {
    addItem(producto, unidadSeleccionada);
    if (unidadSeleccionada != undefined) {
      setSeleccionado(unidadSeleccionada);
    }
  };

  return (
    <>
      <article>
        <h2>{producto.nombre}</h2>
        <p>{producto.indice}</p>
        <p>${producto.precio}</p>
      </article>
      <ItemCount initial={1} onAdd={onAdd} stock={5} />
      <p>
        {seleccionado
          ? "Ya elegiste una cantidad"
          : "No se eligio ninguna cantidad"}
      </p>
      {seleccionado ? (
        <Link to="/carrito">
          <button>Carrito</button>
        </Link>
      ) : null}
    </>
  );
};

export default ItemDetail;
