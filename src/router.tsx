import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App.tsx";
import { ProductService } from "./api/product.api.ts";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>} loader={ProductService.getProductList}>
        </Route>
    )
);
export default router;