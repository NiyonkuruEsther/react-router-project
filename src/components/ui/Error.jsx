import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return (
    <div className=" max-w-5xl mx-auto px-8 ">
      <h1 className="font-bold text-3xl">Error: {error.message}</h1>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </div>
  );
}
