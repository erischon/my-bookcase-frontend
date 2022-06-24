import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <Link to="/" className="logo">
        My Bookcase
      </Link>
    </header>
  );
};

export default Navbar;
