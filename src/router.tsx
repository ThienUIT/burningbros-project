import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ProductService } from "./api/product.api.ts";

const SearchPage = React.lazy(() => import("./pages/search.tsx"));
const Layout = React.lazy(() => import("./pages/layout.tsx"));
const ProductPage = React.lazy(() => import("./pages/product.tsx"));
const App = React.lazy(() => import("./App.tsx"));
const ErrorBoundary = React.lazy(
  () => import("./components/error-boundary.tsx"),
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      errorElement={<ErrorBoundary />}
    >
      <Route index element={<App />} />
      <Route
        index={true}
        path="products"
        element={<ProductPage />}
        loader={async () =>
          await ProductService.getProductList({
            skip: 0,
            limit: 20,
          })
        }
      ></Route>
      <Route
        path="search"
        element={<SearchPage />}
        loader={async ({ request }) => {
          const keyword = new URL(request.url).searchParams.get("q");
          return await ProductService.searchProduct(keyword!);
        }}
      />
    </Route>,
  ),
);
export default router;
