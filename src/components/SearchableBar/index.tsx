import { useEffect, useState } from "react";
import { Form, useLocation, useSearchParams } from "react-router-dom";
import { ROUTE_PATH } from "../../utils/const/route-path.ts";

export default function SearchableBar() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  console.log(location.pathname);

  const [search, setSearch] = useState(() => {
    return searchParams.get("q") ?? "";
  });

  const onHandleSearch = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (location.pathname.includes(ROUTE_PATH.PRODUCTS)) {
      setSearch("");
    }
  }, [location.pathname]);

  return (
    <Form className="container" method={"GET"} action="/src/pages/Search/search">
      <label
        htmlFor="q"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className=" relative">
        <div className=" absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className=" w-4 h-4 text-gray-500 "
            aria-hidden="true"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          name="q"
          id="q"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none"
          placeholder="Search product"
          value={search}
          onChange={onHandleSearch}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </Form>
  );
}
