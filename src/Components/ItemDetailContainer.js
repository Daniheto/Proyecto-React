import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ItemDetail from "./ItemDetail";

let detalleProducto = [
  {
    indice: 1,
    nombre: "producto1",
    precio: 100,
    stock: 5,
    categoria: "indumentaria",
  },
  {
    indice: 2,
    nombre: "producto2",
    precio: 200,
    stock: 5,
    categoria: "elementos",
  },
  {
    indice: 3,
    nombre: "producto3",
    precio: 300,
    stock: 5,
    categoria: "objetos",
  },
];

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(detalleProducto);
      }, 1000);
    });

    promesa
      .then((respuestaApi) => {
        setProductos(respuestaApi.find((producto) => producto.indice == +id));
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
      <ItemDetail key={productos.id} productos={productos} />
    </div>
  );
};

export default ItemDetailContainer;
