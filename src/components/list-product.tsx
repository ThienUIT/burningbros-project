import { ProductType } from "../utils/type/product.type.ts";
import SingleProductCard from "./single-product-card.tsx";

export default function ListProduct({ props }: { props: ProductType[] }) {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <div className="container m-auto grid grid-cols-2 md:grid-cols-4 grid-rows-1 gap-4">
      {props.map((product) => (
        <SingleProductCard key={product.id} {...product} />
      ))}
      <button
        onClick={scrollToTop}
        className="fixed bottom-0 right-0 p-3 rounded-full bg-blue-500 text-white hover:bg-blue-400 transition 
        ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
        focus:ring-opacity-60"
      >
        TOP
      </button>
    </div>
  );
}
