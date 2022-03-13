import { useState, useEffect } from "react";
import ItemList from "./ItemList";

let productosIniciales = [
  { indice: 1, nombre: "producto1", precio: 100 },
  { indice: 2, nombre: "producto2", precio: 200 },
  { indice: 3, nombre: "producto3", precio: 300 },
];

const ItemListContainer = (greeting) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosIniciales);
      }, 3000);
    });

    promesa
      .then((respuestaApi) => {
        setProductos(productosIniciales);
      })

      .catch((errorApi) => {
        console.log(errorApi);
        setError("Hubo un error");
      })
      .finally(() => {
        setLoading(false);
      });
  });

  return (
    <main className="mainStyle">
      <h2>
        Hola {greeting.nombre} {greeting.apellido}, bienvenido a la pagina de
        hammers ultimate club.
      </h2>
      <p>{loading ? "Cargando..." : "Ya tenes los productos"}</p>
      <ul>
        {productos.map((producto, indice) => {
          return <li>{producto.nombre}</li>;
        })}
      </ul>
    </main>
  );
};

export default ItemListContainer;
