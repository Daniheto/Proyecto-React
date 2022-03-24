import { createContext, useState } from "react";
export const contexto = createContext();
const { Provider } = contexto;

const MiProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (item, cantidad) => {
    const index = cartList.findIndex((i) => i.item.id === item.id);

    if (index > -1) {
      const agrego = cartList[index.cantidad];

      cartList.splice(index, 1);

      setCartList([...cartList, { item, cantidad: cantidad + agrego }]);
    } else {
      setCartList([...cartList, { item, cantidad }]);
    }
  };

  const precioTotal = () => {
    return cartList.reduce((acum, i) => acum + i.cantidad + i.item.precio, 0);
  };

  const borrarItem = (id) => {
    const items = cartList.filter((i) => i.item.id !== id);
    setCartList(items);
  };

  const vaciar = () => {
    setCartList([]);
  };

  const IsInCart = () => {
    return cartList.reduce((acum, i) => acum + i.cantidad, 0);
  };

  return (
    <Provider
      value={{ cartList, addItem, precioTotal, vaciar, borrarItem, IsInCart }}
    >
      {children}
    </Provider>
  );
};

export default MiProvider;
