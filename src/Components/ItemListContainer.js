import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "./Firebase";
import ItemList from "./ItemList";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      const productosCollection = collection(db, "productos");
      const documentos = getDocs(productosCollection);

      documentos
        .then((respuesta) =>
          setProductos(
            respuesta.docs.map((doc) => {
              const producto = {
                id: doc.id,
                ...doc.data(),
              };
              return producto;
            })
          )
        )
        .catch((errorApi) => toast.error("Error al cargar el detalle"))
        .finally(() => setLoading(false));
    } else {
      const productosCollection = collection(db, "productos");
      const miFiltro = query(productosCollection, where("categoria", "==", id));
      const documentos = getDocs(miFiltro);

      documentos
        .then((respuesta) =>
          setProductos(
            respuesta.docs.map((doc) => {
              const producto = {
                id: doc.id,
                ...doc.data(),
              };
              return producto;
            })
          )
        )
        .catch((errorApi) => toast.error("Error al cargar el detalle"))
        .finally(() => setLoading(false));
    }
  }, [id]);

  return (
    <div className="mainStyle">
      <p>{loading ? "Cargando..." : "Ya tenes los productos"}</p>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
