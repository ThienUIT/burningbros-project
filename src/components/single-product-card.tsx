import { useMemo } from "react";
import { ProductType } from "../type/product.type.ts";

export default function SingleProductCard({
  title,
  price,
  thumbnail,
  brand,
  discountPercentage,
}: ProductType) {
  const discountPrice = useMemo(
    () => (isNaN(discountPercentage) ? 0 : (price * discountPercentage) / 100),
    [price, discountPercentage],
  );

  return (
    <div className="rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <div className="h-40">
          <img
            className="rounded-t-lg object-fill w-full h-full"
            src={thumbnail}
            alt="thumbnail"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
          {title} - {brand}
        </h5>
        <p className="mb-4 text-base text-neutral-600  line-through">
          ${price}
        </p>
        <p className="mb-4 text-base text-red-600 font-bold ">
          ${(price - discountPrice)?.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
