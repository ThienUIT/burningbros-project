import { ProductType } from "../type/product.type.ts";
import SingleProductCard from "./single-product-card.tsx";

export default function ListProduct({ props }: { props: ProductType[] }) {
  return (
    <div className="container m-auto grid grid-cols-2 md:grid-cols-4 grid-rows-1 gap-4">
      {props.map((product) => (
        <SingleProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
