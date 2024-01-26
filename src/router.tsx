import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App.tsx";
import { ProductService } from "./api/product.api.ts";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}
               loader={() => ProductService.getProductList({
                   skip: 0,
                   limit: 20
               })}>
        </Route>
    )
);
export default router;