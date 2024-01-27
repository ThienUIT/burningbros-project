import { useLoaderData } from "react-router-dom";
import InfiniteScroll from "./components/infinite-scroll.tsx";
import { ProductsResponse } from "./type/product.type.ts";

export default function App() {
  const data = useLoaderData() as ProductsResponse;

  return <InfiniteScroll {...data} />;
}
