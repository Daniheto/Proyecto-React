import { useState } from "react";

const ItemListContainer = (greeting) => {
  const [contador, setContador] = useState(greeting.initial);

  const handleClick = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  const confirmar = () => {};

  return (
    <main className="mainStyle">
      <h2>
        Hola {greeting.nombre} {greeting.apellido}, bienvenido a la pagina de
        hammers ultimate club.
      </h2>
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
    </main>
  );
};

export default ItemListContainer;
