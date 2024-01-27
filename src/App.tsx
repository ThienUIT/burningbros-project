import ListProduct from "./components/list-product.tsx";
import { useLoaderData } from "react-router-dom";
import { LoaderProductType } from "./type/product.type.ts";


function App() {
    const data = useLoaderData() as LoaderProductType;

    return (
        <ListProduct {...data}/>
    );
}

export default App
