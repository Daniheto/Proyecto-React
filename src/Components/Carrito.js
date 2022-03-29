import { useContext, useState } from "react";
import { contexto } from "./CartContext";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const Carrito = () => {
  const { clear, cart, removeItem, total } = useContext(contexto);
  const [seleccionado, setSeleccionado] = useState(false);

  const onAdd = (unidadSeleccionada) => {
    if (unidadSeleccionada != undefined) {
      setSeleccionado(unidadSeleccionada);
    }
  };

  return (
    <>
      <h2>Carrito</h2>
      <div>
        {cart.map((item) => (
          <div key={item.id}>
            <h2>{item.producto.nombre}</h2>
            <img src="https://picsum.photos/200/150" alt="" />
            <p>Unidades seleccionadas: {item.contador}</p>
            <p>${item.producto.precio}</p>
            <p>Total: ${item.producto.precio * item.contador}</p>
            <button onClick={() => removeItem(item.producto)}>
              Remover producto
            </button>
          </div>
        ))}
      </div>
      <button onClick={clear}>Vaciar Carrito</button>
      <p>Total Compra: ${total}</p>
      <p>
        {seleccionado
          ? "Ya elegiste una cantidad"
          : "No se agrego ningun producto al carrito, por favor agrega uno"}
      </p>
      {seleccionado ? (
        <Link to="/">
          <button>Catalago</button>
        </Link>
      ) : null}
    </>
  );
};

export default Carrito;
