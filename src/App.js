import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main nombre="Daniel" apellido="Hernandez" />
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
