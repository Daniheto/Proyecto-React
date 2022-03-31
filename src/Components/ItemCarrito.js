// import { useState } from "react";
// import { Link } from "react-router-dom";
// // import { useContext, useState } from "react";
// import { contexto } from "./CartContext";

// const ItemCarrito = () => {
//   const [seleccionado, setSeleccionado] = useState(false);

//   const onAdd = (unidadSeleccionada) => {
//     if (unidadSeleccionada != undefined) {
//       setSeleccionado(unidadSeleccionada);
//     }
//   };

//   return (
//     <>
//       <p>
//         {seleccionado
//           ? "Ya elegiste una cantidad"
//           : "No se eligio ninguna cantidad"}
//       </p>
//       {seleccionado ? (
//         <Link to="/carrito">
//           <button>Carrito</button>
//         </Link>
//       ) : null}
//     </>
//   );
// };

// export default ItemCarrito;
