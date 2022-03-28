import { useContext, useState } from "react";
import { contexto } from "./CartContext";

const Carrito = () => {
  const { clear, cart, removeItem } = useContext(contexto);

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
    </>
  );
};

export default Carrito;
