import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import Carrito from "./Carrito";
import Cierre from "./Cierre";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/division/:id" element={<ItemListContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/finalizarCompra" element={<Cierre />} />
        <Route path="/elemento/:id" element={<ItemDetailContainer />} />
      </Routes>
    </main>
  );
};

export default Main;
