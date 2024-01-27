import { Navigate } from "react-router-dom";
import { ROUTE_PATH } from "./utils/const/route-path.ts";

export default function App() {
  return <Navigate to={ROUTE_PATH.PRODUCTS} replace={true} />;
}
