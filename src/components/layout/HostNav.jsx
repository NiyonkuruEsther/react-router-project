import { Link } from "react-router-dom";

const HostNav = () => {
  return (
    <div>
      <div className="flex p-8 justify-between w-3/5 text-lg font-semibold">
        <Link to="/host" className="text-opacity-70 text-dark">
          Dashboard{" "}
        </Link>

        <Link to="/about" className="text-opacity-70 text-dark">
          Income{" "}
        </Link>

        <Link to="/about" className="text-opacity-70 text-dark">
          Vans{" "}
        </Link>

        <Link to="/about" className="text-opacity-70 text-dark">
          Reviews{" "}
        </Link>
      </div>
    </div>
  );
};

export default HostNav;
