import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ItemListContainer from "./Components/ItemListContainer";

function App() {
  return (
    <>
      <Header />
      <ItemListContainer nombre="Daniel" apellido="Hernandez" />
      <Footer />
    </>
  );
}

export default App;
