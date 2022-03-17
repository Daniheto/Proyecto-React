import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/division/1">Discos</NavLink>
      <NavLink to="/division/2">Remeras</NavLink>
      <NavLink to="/division/3">Shorts</NavLink>
      <NavLink to="/carrito">Carrito</NavLink>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
