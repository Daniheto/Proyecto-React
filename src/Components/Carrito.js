import { useContext } from "react";
import { contexto } from "./CartContext";

const Carrito = () => {
  useContext(contexto);

  return <div>Carrito</div>;
};

export default Carrito;
