import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import MiProvider from "./Components/CartContext";

function App() {
  return (
    <MiProvider>
      <BrowserRouter>
        <Header />
        <Main nombre="Daniel" apellido="Hernandez" />
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </MiProvider>
  );
}

export default App;
