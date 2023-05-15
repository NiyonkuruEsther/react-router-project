import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between bg-light-cream p-8 text-dark">
      <NavLink
        exact
        to="/"
        className="font-bold text-3xl"
        activeClassName="active"
      >
        #VANLIFE
      </NavLink>
      <div className="flex justify-between w-2/5 text-lg font-semibold">
        <NavLink
          to="/about"
          className="text-opacity-70 text-dark"
          activeClassName="active"
        >
          About
        </NavLink>
        <NavLink
          to="/host"
          className="text-opacity-70 text-dark"
          activeClassName="active"
        >
          Host
        </NavLink>
        <NavLink
          to="/vans"
          className="text-opacity-70 text-dark"
          activeClassName="active"
        >
          Vans
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
