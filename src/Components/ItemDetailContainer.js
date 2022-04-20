import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ItemDetail from "./ItemDetail";
import { db } from "./Firebase";
import { collection, where, query, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const productosCollection = collection(db, "productos");
    const miFiltro = query(productosCollection, where("id", "==", Number(id)));
    const documentos = getDocs(miFiltro);

    documentos
      .then((respuesta) => setItem(respuesta.docs.map((doc) => doc.data())[0]))
      .catch((errorApi) => toast.error("Error al cargar el detalle"))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="detalle">
      <p>{loading ? "Cargando..." : "Ya tenes el detalle del producto"}</p>
      <ItemDetail key={item.id} productos={item} />
    </div>
  );
};

export default ItemDetailContainer;
