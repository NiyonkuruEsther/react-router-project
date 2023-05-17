import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function VanDetails() {
  const location = useLocation();
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);
  const search = location.state?.search || "";
  const type = location.state?.type || "all";
  console.log(location.state);
  return (
    <div>
      {van ? (
        <div className="p-8 flex flex-col gap-10">
          <Link
            to={`..${search}`}
            relative="path"
            className="underline underline-offset-1 flex items-center gap-1 "
          >
            <FaArrowLeft />
            Back to {type} vans
          </Link> 
          <img src={van.imageUrl} className="rounded-lg" />
          <div className="flex flex-col gap-4">
            <button
              className={`self-start py-2 px-4 text-md rounded-md ${van.type} font-medium text-cream`}
            >
              {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
            </button>
            <h1 className="text-4xl font-bold ">{van.name}</h1>
            <p className="text-2xl">
              <span className="font-bold">${van.price}</span>/day
            </p>
            <p className="text-xl">{van.description}</p>
            <button className="bg-orange rounded-lg p-4 text-center text-white text-xl font-medium">
              Rent this van
            </button>
          </div>
        </div>
      ) : (
        <h2 className="p-8 font-bold text-2xl">Loading...</h2>
      )}
    </div>
  );
}
