import { useContext, useState } from "react";
import { contexto } from "./CartContext";
import { db } from "./Firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Carrito = () => {
  const { clear, cart, removeItem, total } = useContext(contexto);

  const handleClick = () => {
    const orden = {
      buyer: {
        nombre: "daniel",
        telefono: "666666666",
        email: "daniel@gmail.com",
      },
      items: cart,
      date: serverTimestamp(),
      total: total,
    };
    const ordenesCollection = collection(db, "ordenes");
    const pedido = addDoc(ordenesCollection, orden);
    toast.info(
      <button onClick={clear}>
        <Link to="/finalizarCompra">
          Tu pedido se ha realizado correctamente, haz click aqui para finalizar
        </Link>
      </button>
    );
  };

  return (
    <>
      <h2>Carrito</h2>
      {cart.length != 0 ? (
        <div className="carrito">
          {cart.map((item) => (
            <div className="productosCarrito" key={item.id}>
              <h2>{item.productos.nombre}</h2>
              <img src={item.productos.imagen} alt="" />
              <p>Unidades seleccionadas: {item.contador}</p>
              <p>Precio unidad: ${item.productos.precio}</p>
              <p>Total: ${item.productos.precio * item.contador}</p>
              <button onClick={() => removeItem(item.productos)}>
                Remover producto
              </button>
            </div>
          ))}
          <button onClick={clear}>Vaciar Carrito</button>
          <p>Total Compra: ${total}</p>
          <button className="confirmarCompra" onClick={handleClick}>
            Confirmar Compra
          </button>
        </div>
      ) : (
        <>
          <div className="carritoVacio">
            <p>"No hay productos seleccionados"</p>
            <Link to="/">
              <button className="catalogo">Catalago</button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Carrito;
