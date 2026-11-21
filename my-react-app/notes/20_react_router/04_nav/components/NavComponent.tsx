import { Link, Outlet } from "react-router";

const NavComponent = () => {
  return (
    <nav>
      <li>
        <ul style={{ display: "flex", flexDirection: "column" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </li>
      <Outlet />
    </nav>
  );
};
export default NavComponent;
