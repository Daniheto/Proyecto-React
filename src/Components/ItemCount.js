import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = (greeting) => {
  const [contador, setContador] = useState(greeting.initial);
  const [show, setShow] = useState(true);

  const handleClick = () => {
    if (contador < greeting.stock) setContador(contador + 1);
  };

  const restar = () => {
    if (contador > greeting.initial) setContador(contador - 1);
  };

  const handleConfirmar = () => {
    greeting.onAdd(contador);
    setShow(false);
  };

  return (
    <div className="card">
      {!show ? (
        <Link to="/carrito">
          <button>Carrito</button>
        </Link>
      ) : (
        <>
          {" "}
          <div>
            <p>Cantidad : {contador} </p>
            <button className="disminuye" onClick={restar}>
              -
            </button>
            <button className="aumenta" onClick={handleClick}>
              +
            </button>
          </div>
          <button className="confirmar" onClick={handleConfirmar}>
            Confirmar
          </button>
        </>
      )}
    </div>
  );
};

export default ItemCount;
