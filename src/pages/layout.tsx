import SearchableBar from "../components/searchable-bar.tsx";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loading from "../components/loading.tsx";

export default function Layout() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col items-center gap-4 p-4">
        <SearchableBar />
        <Outlet />
      </div>
    </Suspense>
  );
}
