import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => (
    <div key={van.id} className="flex flex-col -space-y-4 ">
      <img className="max-w-xs rounded-lg mb-8" src={van.imageUrl} />
      <div className="flex justify-between">
        <h3>{van.name}</h3>
        <p className="text-sm flex flex-col items-end">
          <span className="font-bold text-xl"> ${van.price}</span>
          /day
        </p>
      </div>
      <Link
        to={`/vans/${parseInt(van.id, 10)}`}
        className={`self-start py-2 px-4 text-md rounded-md ${van.type} font-medium text-cream`}
      >
        {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
      </Link>
    </div>
  ));

  return (
    <div className="p-8 mx-auto flex flex-col gap-12">
      <h1 className="text-3xl font-bold text-center">
        Explore our van options
      </h1>
      <div className="flex flex-wrap justify-between gap-y-12">
        {vanElements}
      </div>
    </div>
  );
};

export default Vans;