import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { contexto } from "./CartContext";

export const ItemDetail = ({ productos }) => {
  const [seleccionado, setSeleccionado] = useState(false);
  const { addItem, cart } = useContext(contexto);

  const onAdd = (unidadSeleccionada) => {
    addItem(productos, unidadSeleccionada);
    if (unidadSeleccionada != undefined) {
      setSeleccionado(unidadSeleccionada);
    }
  };

  return (
    <>
      <article>
        <h2>{productos.nombre}</h2>
        <p>{productos.indice}</p>
        <p>${productos.precio}</p>
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
