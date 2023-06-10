import { Suspense, useEffect, useState } from "react";
import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { requireAuth } from "../../utils/util";
import { getHostVans } from "../../utils/api";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ vans: getHostVans() });
}

export default function HostVanList() {
  const dataPromise = useLoaderData();

  function renderVanElements(vans) {
    const hostVansElt = vans.map((van) => {
      return (
        <Link
          to={`${van.id}`}
          key={van.id}
          className="flex justify-between items-center p-4 bg-white rounded-md"
        >
          <div className="flex gap-4">
            <img className="w-24 rounded-md" src={van.imageUrl} alt="" />
            <div>
              <p className="text-2xl font-semibold">{van.name}</p>
              <p className="text-black text-opacity-40 text-lg font-medium ">
                ${van.price}/day
              </p>{" "}
            </div>
          </div>

          <p className="text-lg">Edit</p>
        </Link>
      );
    });
    return (
      <section className="flex flex-col gap-6 pb-6">{hostVansElt}</section>
    );
  }

  return (
    <section className="bg-[#FFF7ED] px-8 ">
      <div className="max-w-6xl mx-auto">
        <div className="">
          <div className="flex justify-between max-w-6xl mx-auto  items-center py-10 ">
            <p className="text-3xl font-bold">Your Listed Vans</p>
            <p className="text-xl font-semibold">View All</p>
          </div>
        </div>
        <Suspense>
          <Await resolve={dataPromise.vans}>{renderVanElements}</Await>
        </Suspense>
        {/* {vans.length ? (
          { renderVanElements }
        ) : (
          <h2 className="p-8 font-bold text-2xl">Loading...</h2>
        )} */}
      </div>
    </section>
  );
}
