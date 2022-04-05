import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "./Firebase";
import ItemList from "./ItemList";
import { getDocs, collection, query, where } from "firebase/firestore";

let productosIniciales = [
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
  {
    indice: 4,
    nombre: "producto4",
    precio: 400,
    stock: 5,
    categoria: "indumentaria",
  },
  {
    indice: 5,
    nombre: "producto5",
    precio: 500,
    stock: 5,
    categoria: "elementos",
  },
  {
    indice: 6,
    nombre: "producto6",
    precio: 600,
    stock: 5,
    categoria: "objetos",
  },
  {
    indice: 7,
    nombre: "producto7",
    precio: 700,
    stock: 5,
    categoria: "indumentaria",
  },
  {
    indice: 8,
    nombre: "producto8",
    precio: 800,
    stock: 5,
    categoria: "elementos",
  },
];

const ItemListContainer = (greeting) => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      const productosCollection = collection(db, "productos");
      const documentos = getDocs(productosCollection);

      documentos
        .then((respuesta) =>
          setProductos(respuesta.docs.map((doc) => doc.data()))
        )
        .catch((errorApi) => toast.error("Error al cargar el detalle"))
        .finally(() => setLoading(false));
    } else {
      const productosCollection = collection(db, "productos");
      const miFiltro = query(productosCollection, where("categoria", "==", id));
      const documentos = getDocs(miFiltro);

      documentos
        .then((respuesta) =>
          setProductos(respuesta.docs.map((doc) => doc.data()))
        )
        .catch((errorApi) => toast.error("Error al cargar el detalle"))
        .finally(() => setLoading(false));
    }

    // documentos
    //   .then((respuesta) => {
    //     const aux = [];
    //     respuesta.forEach((documento) => {
    //       const productos = {
    //         id: documento.id,
    //         ...documento.data(),
    //       };
    //       aux.push(productos);
    //     });
    //     setProductos(aux);
    //   })
    //   .catch(() => {
    //     toast.error("Error al cargar los productos");
    //   });
    // const promesa = new Promise((res, rej) => {
    //   setTimeout(() => {
    //     res(productosIniciales);
    //   }, 1000);
    // });
    // promesa
    //   .then((respuestaApi) => {
    //     setProductos(
    //       id
    //         ? respuestaApi.filter((producto) => producto.categoria == +id)
    //         : respuestaApi
    //     );
    //   })
    //   .catch((errorApi) => {
    //     toast.error("Error al cargar los productos");
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  }, [id]);

  return (
    <div className="mainStyle">
      <p>{loading ? "Cargando..." : "Ya tenes los productos"}</p>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
