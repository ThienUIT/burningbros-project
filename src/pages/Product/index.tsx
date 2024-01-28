import { useLoaderData } from "react-router-dom";
import InfiniteScroll from "../../components/InfiniteScroll";
import { ProductsResponse } from "../../utils/type/product.type.ts";

export default function ProductPage() {
  const loadData = useLoaderData() as ProductsResponse;
  return <InfiniteScroll {...loadData} />;
}
