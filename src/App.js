import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ItemListContainer from "./Components/ItemListContainer";
import ItemCount from "./Components/ItemCount";
import ItemDetailContainer from "./Components/ItemDetailContainer";

function App() {
  const miOnAdd = () => {};

  return (
    <>
      <Header />
      <ItemListContainer nombre="Daniel" apellido="Hernandez" />
      <ItemDetailContainer />
      <ItemCount initial={1} onAdd={miOnAdd} stock={5} />
      <Footer />
    </>
  );
}

export default App;
