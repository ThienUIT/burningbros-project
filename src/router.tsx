import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ProductService } from "./api/product.api.ts";
import { ROUTE_PATH } from "./utils/const/route-path.ts";

const SearchPage = React.lazy(() => import("./pages/search.tsx"));
const Layout = React.lazy(() => import("./pages/layout.tsx"));
const ProductPage = React.lazy(() => import("./pages/product.tsx"));
const App = React.lazy(() => import("./App.tsx"));
const ErrorBoundary = React.lazy(
  () => import("./components/error-boundary.tsx"),
);

const removeSlash = (value: string) => {
  return value.replace("/", "");
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={ROUTE_PATH.ROOT}
      element={<Layout />}
      errorElement={<ErrorBoundary />}
    >
      <Route index element={<App />} />
      <Route
        index
        path={removeSlash(ROUTE_PATH.PRODUCTS)}
        element={<ProductPage />}
        loader={async () =>
          await ProductService.getProductList({
            skip: 0,
            limit: 20,
          })
        }
      />
      <Route
        path={removeSlash(ROUTE_PATH.SEARCH)}
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
