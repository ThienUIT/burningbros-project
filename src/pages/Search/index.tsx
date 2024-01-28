import { Link, useLoaderData } from "react-router-dom";
import { ProductsResponse } from "../../utils/type/product.type.ts";
import { ROUTE_PATH } from "../../utils/const/route-path.ts";
import ListProduct from "../../components/ListProduct";

export default function SearchPage() {
  const data = useLoaderData() as ProductsResponse;

  if (!data.total) {
    return (
      <div>
        <h1 className="text-2xl font-bold">No results found</h1>
        <p className="text-gray-500">
          Try adjusting your search or filter to find what you are looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="flex items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Search results</h1>
        <Link
          to={ROUTE_PATH.ROOT}
          className="text-white bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          type="button"
        >
          Go back
        </Link>
      </div>
      <ListProduct props={data.products} />
    </div>
  );
}
