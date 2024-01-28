import InfiniteScroll from "../components/infinite-scroll.tsx";
import { useLoaderData } from "react-router-dom";
import { ProductsResponse } from "../utils/type/product.type.ts";

export default function ProductPage() {
  const loadData = useLoaderData() as ProductsResponse;
  return <InfiniteScroll {...loadData} />;
}
