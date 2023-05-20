import { useState } from "react";
import { Form, Link, useLoaderData, useNavigate } from "react-router-dom";
import { loginUser } from "../utils/api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const data = await loginUser({ email, password });
  localStorage.setItem("loggedin", true);

  return null;
}

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const message = useLoaderData();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    loginUser(loginFormData)
      .then((data) => {
        navigate("/host", { replace: true });
      })
      .catch((err) => setError(err))
      .finally(() => setStatus("idle"));
  }
  const handleChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };
  return (
    <div className="h-full flex flex-col justify-center items-center mb-20 mt-10">
      <div className=" shadow-xl border-4 ring-4 ring-black  rounded-3xl flex flex-col gap-6 p-6">
        <div className="">
          <h2 className="title text-black  font-extrabold text-3xl">
            Sign in to your account{" "}
          </h2>
          {message && (
            <h3 className="text-red-orange text-xl w-fit mx-auto py-3">
              {message}
            </h3>
          )}
          {error && (
            <h3 className="text-red-orange text-xl w-fit mx-auto py-3">
              {error.message}
            </h3>
          )}
        </div>
        <Form method="post">
          <div className="flex flex-col w-full gap-4 ">
            <div className="bg-white pb-1 w-full rounded-3xl h-12 border-2  flex flex-col justify-center items-center">
              <input
                className="w-5/6 focus:outline-none px-4"
                type="text"
                name="email"
                placeholder="Your email address"
                onChange={handleChange}
              />
            </div>
            <div className="bg-white pb-1 w-full rounded-3xl h-12 border-2 flex flex-col justify-center items-center">
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
                disabled={status === "submitting"}
                className="submit text-lg px-4 font-bold  text-white w-fit flex justify-center p-2 rounded-full items-center gap-4 bg-orange "
                type="submit"
              >
                {status === "submitting" ? "Logging in..." : "Log in"}
              </button>
              <span className=" text-opacity-40 text-black">
                Don&apos;t have an account{" "}
                <Link to="/signup" className="text-black">
                  Create an account
                </Link>
              </span>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
