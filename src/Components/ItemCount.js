import { useState } from "react";

const ItemCount = (greeting) => {
  const [contador, setContador] = useState(greeting.initial);

  const handleClick = () => {
    if (contador < greeting.stock) setContador(contador + 1);
  };

  const restar = () => {
    if (contador > greeting.initial) setContador(contador - 1);
  };

  const confirmar = () => {};

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
      <button className="confirmar" onClick={confirmar}>
        Confirmar
      </button>
    </div>
  );
};

export default ItemCount;
