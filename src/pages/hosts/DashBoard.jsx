import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";

export default function Dashboard() {
  return (
    <div className="">
      <section className="p-8 bg-cream">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl">Welcome!</h1>
          <div className="flex justify-between">
            <p className="text-opacity-70 text-dark text-xl">
              Income last{" "}
              <span className="underline underline-offset-2 font-bold">
                30 days
              </span>
            </p>
            <Link to="income" className="text-lg">
              Details
            </Link>
          </div>

          <h2 className="text-4xl font-bold">$2,260</h2>
        </div>
      </section>
      <section className="bg-[#FFDDB3] p-8 flex justify-between">
        <div className="flex gap-4 items-center">
          <h2 className="text-2xl font-bold">Review score</h2>

          <BsStarFill className="star text-orange text-2xl" />

          <p className="text-xl font-bold">
            5.0<span className="text-opacity-40 text-black">/5</span>
          </p>
        </div>

        <Link to="reviews" className="text-lg">
          Details
        </Link>
      </section>
      <section className="p-8 flex flex-col gap-3">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Your listed vans</h2>
          <Link to="vans" className="text-xl">
            View all
          </Link>
        </div>
        <div className="bg-white">
          <div className="flex justify-between items-center p-4">
            <div className="flex gap-4">
              <img
                className="w-24 rounded-md"
                src="https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png"
                alt=""
              />
              <div>
                <p className="text-2xl font-semibold">Beach Bum</p>
                <p className="text-black text-opacity-40 text-lg font-medium ">
                  $60/day
                </p>{" "}
              </div>
            </div>

            <p className="text-lg">Edit</p>
          </div>
        </div>
      </section>
    </div>
  );
}
