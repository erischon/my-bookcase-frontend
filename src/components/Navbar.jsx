import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <Link to="/" className="logo">
        My Bookcase
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
