import { NavLink } from "react-router-dom";

const HostNav = () => {
  return (
    <div>
      <div className="flex p-8 justify-between w-3/5 text-lg font-semibold">
        <NavLink
          end
          to="/host"
          className={`text-opacity-70 text-dark ${({ isActive }) =>
            isActive ? "active" : null}`}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="income"
          className={`text-opacity-70 text-dark ${({ isActive }) =>
            isActive ? "active" : null}`}
        >
          Income{" "}
        </NavLink>

        <NavLink
          to="vans"
          className={`text-opacity-70 text-dark ${({ isActive }) =>
            isActive ? "active" : null}`}
        >
          Vans{" "}
        </NavLink>

        <NavLink
          to="reviews"
          className={`text-opacity-70 text-dark ${({ isActive }) =>
            isActive ? "active" : null}`}
        >
          Reviews{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default HostNav;
