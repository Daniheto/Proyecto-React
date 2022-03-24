import { useContext, useState } from "react";
import { contexto } from "./CartContext";
import CarritoItem from "./CarritoItem";

const Carrito = () => {
  const { cartList, vaciarCarrito, precioTotal } = useContext(contexto);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
      <h2>Carrito</h2>
      <div>
        <div>
          <div>
            {cartList.map((i) => (
              <CarritoItem
                key={i.item.id}
                Item={i.item}
                Quantity={i.cantidad}
              />
            ))}
          </div>
        </div>
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        <h2>Total: {precioTotal()} $</h2>
      </div>
    </>
  );
};

export default Carrito;
