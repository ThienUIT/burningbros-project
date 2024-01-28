import SingleProductCard from "../SingleProductCard";
import { ProductType } from "../../utils/type/product.type.ts";

export default function ListProduct({ props }: { props: ProductType[] }) {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <div className="container m-auto grid grid-cols-2 md:grid-cols-4 grid-rows-1 gap-4">
      {props.map((product) => (
        <SingleProductCard key={product.id} {...product} />
      ))}
      <button
        onClick={scrollToTop}
        className="button-scroll-top"
      >
        TOP
      </button>
    </div>
  );
}
