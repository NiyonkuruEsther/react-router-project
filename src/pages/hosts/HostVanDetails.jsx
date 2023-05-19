import { FaArrowLeft } from "react-icons/fa";
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../utils/api";

export async function loader({ params }) {
  return getHostVans(params.id);
}
const HostVanDetails = () => {
  const van = useLoaderData();
  return (
    <div className="px-8 flex flex-col">
      <Link
        to={".."}
        relative="path"
        className="underline underline-offset-1 flex items-center gap-1 "
      >
        <FaArrowLeft /> Go back to all vans
      </Link>
      <div className="bg-white px-8 my-6">
        <section className=" ">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center py-8 bg-white rounded-md">
              <div className="flex items-center gap-4">
                <img className="w-44 rounded-md" src={van.imageUrl} alt="" />
                <div className="flex flex-col gap-2">
                  <p
                    className={`self-start py-2 px-4 text-md rounded-md ${van.type} font-medium text-cream`}
                  >
                    {van?.type?.charAt(0).toUpperCase() + van?.type?.slice(1)}
                  </p>{" "}
                  <p className="text-2xl font-semibold">{van.name}</p>
                  <p className="text-black text-opacity-40 text-lg font-medium ">
                    ${van.price}/day
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex py-8 justify-between w-3/5 text-lg font-semibold">
          <NavLink
            end
            to=""
            className={`text-opacity-70 text-dark ${({ isActive }) =>
              isActive ? "active" : null}`}
          >
            Details
          </NavLink>

          <NavLink
            to="pricing"
            className={`text-opacity-70 text-dark ${({ isActive }) =>
              isActive ? "active" : null}`}
          >
            Pricing
          </NavLink>

          <NavLink
            to="photos"
            className={`text-opacity-70 text-dark ${({ isActive }) =>
              isActive ? "active" : null}`}
          >
            Photos
          </NavLink>
        </div>
        <Outlet context={van} />
      </div>
    </div>
  );
};

export default HostVanDetails;
