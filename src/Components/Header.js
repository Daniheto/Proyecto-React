import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header id="main-header">
      <Link to="/">
        <h1>Hammers Ultimate Club</h1>
      </Link>
      <NavBar />
    </header>
  );
};

export default Header;
