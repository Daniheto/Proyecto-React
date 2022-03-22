import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <>
      <article>
        <h2>{producto.nombre}</h2>
        <img src="https://picsum.photos/200/150" alt="" />
        <p> Precio:${producto.precio}</p>
        <button>
          <Link to={`/elemento/${producto.indice}`}>Ver detalle</Link>
        </button>
      </article>
    </>
  );
};

export default Item;
