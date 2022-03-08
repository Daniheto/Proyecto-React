import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ItemListContainer from "./Components/ItemListContainer";

function App() {
  const miOnAdd = () => {};

  return (
    <>
      <Header />
      <ItemListContainer
        nombre="Daniel"
        apellido="Hernandez"
        initial={1}
        onAdd={miOnAdd}
        stock={5}
      />
      <Footer />
    </>
  );
}

export default App;
