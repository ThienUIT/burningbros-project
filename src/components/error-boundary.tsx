import { Link, useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
  let error = useRouteError() as Error;
  console.error(error);
  const goBack = () => history.back();
  return (
    <div className="text-red-600 mt-10 font-bold text-2xl text-center">
      <h1>Something went wrong</h1>
      <pre>{error.message}</pre>
      <Link
        onClick={goBack}
        to=""
        className="text-white bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-10"
        type="button"
      >
        Go back
      </Link>
    </div>
  );
}
