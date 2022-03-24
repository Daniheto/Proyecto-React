import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ItemCount from "./ItemCount";
import ItemDetail from "./ItemDetail";

let detalleProducto = {
  indice: 1,
  nombre: "producto1",
  precio: 100,
  categoria: "indumentaria",
};

const ItemDetailContainer = (greeting) => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const [seleccionado, setSeleccionado] = useState(false);
  const { id } = useParams();

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

  const onAdd = (unidadSeleccionada) => {
    console.log("unidadSeleccionada");
    if (unidadSeleccionada != undefined) {
      setSeleccionado(unidadSeleccionada);
    }
  };

  return (
    <div className="detalle">
      <p>{loading ? "Cargando..." : "Ya tenes el detalle del producto"}</p>
      <ItemDetail productos={productos} />
      <ItemCount initial={1} onAdd={onAdd} stock={5} />
      <p>
        {seleccionado
          ? "Ya elegiste una cantidad"
          : "No se eligio ninguna cantidad"}
      </p>
      {seleccionado ? <Link to="/carrito">carrito</Link> : null}
    </div>
  );
};

export default ItemDetailContainer;
