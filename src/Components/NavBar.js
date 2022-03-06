import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav>
      <a href="https://www.google.com/">Google</a>
      <a href="https://plataforma.coderhouse.com/">Coder</a>
      <a href="https://www.youtube.com/">YouTube</a>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
