import { useCallback, useEffect, useState } from "react";
import { ProductService } from "../api/product.api.ts";
import { ProductsResponse, ProductType } from "../utils/type/product.type.ts";
import ListProduct from "./list-product.tsx";

export default function InfiniteScroll(props: ProductsResponse) {
  const [data, setData] = useState<ProductType[]>(() => props.products);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(2);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(() => true);

    const responseProduct = await ProductService.getProductList({
      skip: index * 10,
    });

    const total = responseProduct.total ?? 0;

    setHasMore(() => data.length <= total - 1);
    setData((prevItems) => [...prevItems, ...responseProduct.products]);
    setIndex((prevIndex) => prevIndex + 2);
    setIsLoading(() => false);
  }, [index, isLoading]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20 && hasMore) {
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchData]);

  return <ListProduct props={data} />;
}
