import { useLocation, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getVans } from "../../utils/api";

export function loader({ params }) {
  return getVans(params.id);
}

export default function VanDetail() {
  const location = useLocation();
  const van = useLoaderData();
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
