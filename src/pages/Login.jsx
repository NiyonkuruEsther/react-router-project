// import { LoginOutlined } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [valuess, setValuess] = useState({
    identifier: "",
    password: "",
  });

  const handleChange = (e) => {
    setValuess({ ...valuess, [e.target.name]: e.target.value });
  };
  return (
    <div className="h-full flex flex-col justify-center items-center mb-20 mt-10">
      <div className=" shadow-xl border-4 ring-4 ring-orange  rounded-3xl flex flex-col gap-6 p-6">
        <div className="">
          <h2 className="title text-orange  font-extrabold text-3xl">
            Sign in to your account{" "}
          </h2>
        </div>
        <form>
          <div className="flex flex-col w-full gap-4 ">
            <div className="bg-white pb-1 w-full rounded-3xl h-12 border-2 focus:ring-2 ring-orange flex flex-col justify-center items-center">
              <input
                className="w-5/6 focus:outline-none px-4"
                type="text"
                name="identifier"
                placeholder="Your email address"
                onChange={handleChange}
              />
            </div>
            <div className="bg-white pb-1 w-full rounded-3xl h-12 border-2 focus:ring-2 ring-orange flex flex-col justify-center items-center">
              <input
                className="w-5/6 focus:outline-none px-4"
                type="password"
                name="password"
                placeholder="Enter a password"
                onChange={handleChange}
              />
            </div>
            <div className="place-self-start gap-5 flex flex-col">
              <button
                className="submit text-lg px-4 font-bold  text-white w-fit flex justify-center p-2 rounded-full items-center gap-4 bg-orange "
                type="submit"
              >
                {/* <LoginOutlined /> */}
                LOGIN
              </button>
              <span className=" text-opacity-40 text-black">
                Don&apos;t have an account{" "}
                <Link to="/signup" className="text-orange">
                  Create an account
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
