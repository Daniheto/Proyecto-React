import { useState } from "react";

const ItemCount = (greeting) => {
  const [contador, setContador] = useState(greeting.initial);
  const [seleccionado, setSeleccionado] = useState(false);

  const handleClick = () => {
    if (contador < greeting.stock) setContador(contador + 1);
  };

  const restar = () => {
    if (contador > greeting.initial) setContador(contador - 1);
  };

  const handleConfirmar = (unidadSeleccionada) => {
    greeting.onAdd(contador);
  };

  const onAdd = (unidadSeleccionada) => {
    if (unidadSeleccionada != undefined) {
      setSeleccionado(unidadSeleccionada);
    }
  };

  return (
    <div className="card">
      <div>
        <p>Cantidad : {contador} </p>
        <button className="disminuye" onClick={restar}>
          -
        </button>
        <button className="aumenta" onClick={handleClick}>
          +
        </button>
      </div>
      <button className="confirmar" onAdd={onAdd} onClick={handleConfirmar}>
        Confirmar
      </button>
    </div>
  );
};

export default ItemCount;
