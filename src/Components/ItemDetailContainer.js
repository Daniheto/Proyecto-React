import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

let detalleProducto = [{ indice: 1, nombre: "producto1", precio: 100 }];

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(detalleProducto);
      }, 2000);
    });

    promesa
      .then((respuestaApi) => {
        setProductos(detalleProducto);
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
    <div className="detalle">
      <p>{loading ? "Cargando..." : "Ya tenes el detalle del producto"}</p>
      <ItemDetail productos={productos} />
    </div>
  );
};

export default ItemDetailContainer;
