import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function VanDetails() {
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <div className="max-w-3xl mx-auto bg-light-cream">
      <Navbar />

      {van ? (
        <div className="p-8 flex flex-col gap-10">
          <Link
            to={"/"}
            className="underline underline-offset-1 flex items-center gap-1 "
          >
            <FaArrowLeft /> Back to all vans
          </Link>
          <img src={van.imageUrl} className="rounded-lg" />
          <div className="flex flex-col gap-4">
            <button
              className={`self-start py-2 px-4 text-md rounded-md ${van.type} font-medium text-cream`}
            >
              {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
            </button>{" "}
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
      <Footer />
    </div>
  );
}
