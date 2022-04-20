import { createContext, useState } from "react";
import { toast } from "react-toastify";
export const contexto = createContext();

export const MiProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (productos, contador) => {
    let productoCarrito = { productos, contador };
    let carritoAuxiliar = [];

    setTotal(total + productos.precio * contador);

    if (isInCart(productos.id)) {
      productoCarrito = cart.find((item) => item.productos.id === productos.id);
      productoCarrito.contador = productoCarrito.contador + contador;
      carritoAuxiliar = [...productoCarrito];
    } else {
      carritoAuxiliar = [productoCarrito, ...cart];
    }
    setCart(carritoAuxiliar);
    toast.success("Producto agregado al carrito");
  };

  const removeItem = (productos) => {
    if (isInCart(productos.id)) {
      let carritoAuxiliar = [...cart];
      carritoAuxiliar = carritoAuxiliar.filter(
        (item) => item.productos !== productos
      );
      setCart(carritoAuxiliar);
      toast.info("Producto removido del carrito");
    }
  };

  const clear = () => {
    setCart([]);
    toast.info("Carrito vaciado");
  };

  const isInCart = (id) => {
    return cart && cart.some((item) => item.productos.id === id);
  };

  return (
    <contexto.Provider value={{ addItem, removeItem, clear, cart, total }}>
      {children}
    </contexto.Provider>
  );
};

export default MiProvider;
