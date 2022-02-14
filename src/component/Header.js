import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <Link to="/" class="logo">kku bus station</Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Map">Map</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Header;
