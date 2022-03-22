import { useState } from "react";

const ItemCount = (greeting, { onAdd }) => {
  const [contador, setContador] = useState(greeting.initial);

  const handleClick = () => {
    if (contador < greeting.stock) setContador(contador + 1);
  };

  const restar = () => {
    if (contador > greeting.initial) setContador(contador - 1);
  };

  const handleConfirmar = (e) => {
    console.log(e);
    onAdd(contador);
  };

  return (
    <div className="card">
      <div>
        <p>Cantidad : {contador} </p>
        <button className="aumenta" onClick={handleClick}>
          +
        </button>
        <button className="disminuye" onClick={restar}>
          -
        </button>
      </div>
      <button className="confirmar" onClick={handleConfirmar}>
        Confirmar
      </button>
    </div>
  );
};

export default ItemCount;
