import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/division/discos">Discos</NavLink>
      <NavLink to="/division/remeras">Remeras</NavLink>
      <NavLink to="/division/shorts">Shorts</NavLink>
      <NavLink to="/carrito">
        <img src="/carrito.png" alt="" height="35px" width="32px" />
      </NavLink>
    </nav>
  );
};

export default NavBar;
