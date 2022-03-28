import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/division/indumentaria">Discos</NavLink>
      <NavLink to="/division/elementos">Remeras</NavLink>
      <NavLink to="/division/objetos">Shorts</NavLink>
      <NavLink to="/carrito">Carrito</NavLink>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
