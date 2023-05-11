import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Vans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => (
    <div key={van.id} className="flex flex-col -space-y-4 ">
      {console.log(van.color)}

      <img className="max-w-xs rounded-lg mb-8" src={van.imageUrl} />
      <div className="flex justify-between">
        <h3>{van.name}</h3>
        <p className="text-sm flex flex-col items-end">
          <span className="font-bold text-xl"> ${van.price}</span>
          /day
        </p>
      </div>
      <button
        className={`self-start py-2 px-4 text-md rounded-sm ${van.type} font-medium text-cream`}
      >
        {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
      </button>
    </div>
  ));

  return (
    <div className="max-w-3xl mx-auto bg-light-cream flex flex-col gap-12">
      <Navbar />
      <div className="px-8 mx-auto flex flex-col gap-12">
        <h1 className="text-3xl font-bold text-center">
          Explore our van options
        </h1>
        <div className="flex flex-wrap justify-between gap-y-12">
          {vanElements}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Vans;
