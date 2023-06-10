import { useOutletContext } from "react-router-dom";

export default function VanDetail() {
  const van = useOutletContext();

  return (
    <section className="text-lg pb-10 space-y-1">
      <div className="flex gap-2">
        <h1 className="font-semibold  text-lg">Name: </h1>
        <span> {van?.name?.charAt(0).toUpperCase() + van?.name?.slice(1)}</span>
      </div>
      <div className="flex gap-2">
        <h1 className="font-semibold text-lg">Category: </h1>
        <span className="">
          {" "}
          {van?.type?.charAt(0).toUpperCase() + van?.type?.slice(1)}
        </span>
      </div>
      <div className="">
        <p>
          {" "}
          <span className="font-semibold text-lg ">Description: </span>
          {van?.description?.charAt(0).toUpperCase() +
            van?.description?.slice(1)}
        </p>
      </div>
      <div className="flex gap-2">
        <h1 className="font-semibold text-lg">Visibility: </h1>
        <span className="text-lg">
          {van?.type?.charAt(0).toUpperCase() + van?.type?.slice(1)}
        </span>
      </div>
    </section>
  );
}
