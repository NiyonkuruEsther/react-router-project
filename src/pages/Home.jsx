import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto h-screen ">
      <Navbar />
      <div className=" text-white  bg-[url('./assets/bg-home.svg')] h-3/4 bg-cover py-[20%]">
        <div className="max-w-xl mx-auto flex flex-col gap-12">
          <h1 className="text-4xl font-bold">
            You got the travel plans, we got the travel vans.
          </h1>
          <p className="text-xl">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <Link
            to="vans"
            className="bg-orange rounded-lg p-4 text-center text-xl font-medium"
          >
            Find your van
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
