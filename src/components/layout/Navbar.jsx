import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between bg-light-cream p-8 text-dark">
      <Link to="/" className="font-bold text-3xl">
        #VANLIFE
      </Link>
      <div className="flex justify-between w-2/5 text-lg font-semibold">
        <Link to="/about" className="text-opacity-70 text-dark">
          About
        </Link>
        <Link to="/host" className="text-opacity-70 text-dark">
          Host
        </Link>
        <Link to="/vans" className="text-opacity-70 text-dark">
          Vans
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
