import aboutImg from "../assets/img-about.svg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="w-full flex flex-col gap-12 justify-center bg-light-cream">
      <img src={aboutImg} className="about-hero-image" />
      <div className="px-8 flex flex-col gap-6">
        <h1 className="text-4xl font-semibold">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="text-xl">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="text-xl">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className=" flex flex-col gap-6 bg-mid-cream rounded-lg mb-12 mx-8 p-8">
        <h2 className="text-3xl font-bold">
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>
        <Link
          className="text-white bg-black py-4 px-8 text-xl w-fit font-semibold rounded-md"
          to="/vans"
        >
          Explore our vans
        </Link>
      </div>
    </div>
  );
}
