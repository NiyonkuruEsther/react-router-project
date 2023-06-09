import { Suspense, useState } from "react";
import {
  Link,
  useSearchParams,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getVans } from "../../utils/api";

export function loader() {
  return defer({ vans: getVans() });
}

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");
  const dataPromise = useLoaderData();

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  function renderVanElements(vans) {
    const displayedVans = typeFilter
      ? vans.filter((van) => van.type === typeFilter)
      : vans;

    const vanElements = displayedVans?.map((van) => (
      <Link
        to={`/vans/${parseInt(van.id, 10)}`}
        state={{
          search: `?${searchParams.toString()}`,
          type: typeFilter,
        }}
        key={van.id}
        className="flex flex-col"
      >
        <img className="max-w-xs rounded-lg mb-8" src={van.imageUrl} />
        <div className="flex justify-between">
          <h3>{van.name}</h3>
          <p className="text-sm flex flex-col items-end">
            <span className="font-bold text-xl"> ${van.price}</span>
            /day
          </p>
        </div>
        <button
          className={`self-start py-2 px-4 text-md rounded-md ${van.type} font-medium text-cream`}
        >
          {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
        </button>
      </Link>
    ));
    return (
      <>
        {" "}
        <div className="flex justify-between">
          <div className="flex gap-6">
            <button
              onClick={() => handleFilterChange("type", "simple")}
              className={`self-start py-2 px-4 text-md rounded-md ${"simple"} font-medium text-cream`}
            >
              Simple
            </button>
            <button
              onClick={() => handleFilterChange("type", "luxury")}
              className={`self-start py-2 px-4 text-md rounded-md ${"luxury"} font-medium text-cream`}
            >
              Luxury
            </button>
            <button
              onClick={() => handleFilterChange("type", "rugged")}
              className={`self-start py-2 px-4 text-md rounded-md ${"rugged"} font-medium text-cream`}
            >
              Rugged
            </button>
          </div>

          <button
            onClick={() => handleFilterChange("type", null)}
            className={`underline font-semibold`}
          >
            Clear filter
          </button>
        </div>
        <div className="flex flex-wrap justify-between gap-y-12">
          {vanElements}
        </div>
      </>
    );
  }

  return (
    <div className="p-8 mx-auto flex flex-col gap-12 w-full">
      <h1 className="text-3xl font-bold text-center">
        Explore our van options
      </h1>
      <div className=" flex flex-col gap-12 w-full">
        <Suspense fallback={<h2>Loading vans...</h2>}>
          <Await resolve={dataPromise.vans}>{renderVanElements}</Await>
        </Suspense>
      </div>
    </div>
  );
};

export default Vans;
