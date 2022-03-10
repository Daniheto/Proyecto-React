import { useState, useEffect } from "react";
import ItemList from "./ItemList";

let productosIniciales = [
  { indice: 1, nombre: "producto1", precio: 100 },
  { indice: 2, nombre: "producto2", precio: 200 },
  { indice: 3, nombre: "producto3", precio: 300 },
];

const ItemListContainer = (greeting, producto) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosIniciales);
      }, 2000);
    });

    promesa
      .then((respuestaApi) => {
        setProductos(productosIniciales);
      })

      .catch((errorApi) => {
        console.log(errorApi);
      });
  });

  return (
    <main className="mainStyle">
      <h2>
        Hola {greeting.nombre} {greeting.apellido}, bienvenido a la pagina de
        hammers ultimate club.
      </h2>
      <ItemList />
    </main>
  );
};

export default ItemListContainer;
