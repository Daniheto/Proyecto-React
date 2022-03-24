import React from "react";
import { contexto } from "./CartContext";

const CarritoItem = ({ Item, Quantity }) => {
  const { borrarItem } = contexto();
  const { titulo, id, precio } = Item;

  const total = precio * Quantity;

  return (
    <div>
      <h3>{titulo}</h3>
      <h3> {Quantity} Unidad</h3>
      <h3> $ {total}</h3>
      <button onClick={() => borrarItem(id)}>X</button>
    </div>
  );
};

export default CarritoItem;
