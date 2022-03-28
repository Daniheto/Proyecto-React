import { createContext, useState } from "react";
export const contexto = createContext();

export const MiProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (producto, contador) => {
    let productoCarrito = { producto, contador };
    let carritoAuxiliar = [];
    if (isInCart(producto)) {
      productoCarrito = cart.find((item) => item.producto === producto);
      productoCarrito.contador = productoCarrito.contador + contador;
      carritoAuxiliar = [...cart];
    } else {
      carritoAuxiliar = [productoCarrito, ...cart];
    }
    setCart(carritoAuxiliar);
  };

  const removeItem = (producto) => {
    if (isInCart(producto)) {
      let carritoAuxiliar = [...cart];
      carritoAuxiliar = carritoAuxiliar.filter(
        (item) => item.producto !== producto
      );
      setCart(carritoAuxiliar);
    }
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (producto) => {
    return cart && cart.some((item) => item.producto === producto);
  };

  return (
    <contexto.Provider value={{ addItem, removeItem, clear, cart }}>
      {children}
    </contexto.Provider>
  );
};

export default MiProvider;
