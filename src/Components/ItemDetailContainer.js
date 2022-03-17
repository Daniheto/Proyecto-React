import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import ItemDetail from "./ItemDetail";

let detalleProducto = {
  indice: 1,
  nombre: "producto1",
  precio: 100,
  categoria: 1,
};

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(detalleProducto);
      }, 1000);
    });

    promesa
      .then((respuestaApi) => {
        setProductos(respuestaApi);
      })
      .catch((errorApi) => {
        toast.error("Error al cargar el detalle");
      })

      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="detalle">
      <p>{loading ? "Cargando..." : "Ya tenes el detalle del producto"}</p>
      <ItemDetail productos={productos} />
    </div>
  );
};

export default ItemDetailContainer;
