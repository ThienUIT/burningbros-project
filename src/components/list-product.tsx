import { LoaderProductType, ProductType } from "../type/product.type.ts";
import SingleProductCard from "./single-product-card.tsx";

export default function ListProduct(props: LoaderProductType) {
    const {products} = props
    return <div className="container m-auto grid grid-cols-2 md:grid-cols-4 grid-rows-1 gap-4">
        {products.map((product: ProductType) => <SingleProductCard key={product.title} {...product}/>)}
    </div>
}