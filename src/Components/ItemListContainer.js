const ItemListContainer = (greeting) => {
  return (
    <div className="div1">
      <h2>
        Hola {greeting.nombre} {greeting.apellido}, bienvenido a la pagina de
        hammers ultimate club.
      </h2>
    </div>
  );
};

export default ItemListContainer;
