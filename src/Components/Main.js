import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemCount from "./ItemCount";
import { Route, Routes } from "react-router-dom";
import Carrito from "./Carrito";

const Main = (greeting) => {
  const miOnAdd = () => {};

  return (
    <main>
      {/*
      <h2 className="tituloMain">
        Hola {greeting.nombre} {greeting.apellido}, bienvenido a la pagina de
        hammers ultimate club.
      </h2>
      <ItemListContainer />
      <ItemDetailContainer />
      <ItemCount initial={1} onAdd={miOnAdd} stock={5} />
  */}
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/division/:id" element={<ItemListContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/elemento/:id" element={<ItemDetailContainer />} />
      </Routes>
    </main>
  );
};

export default Main;
