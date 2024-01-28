import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loading from "../../components/Loading";
import SearchableBar from "../../components/SearchableBar";

export default function Layout() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col items-center gap-4 p-4 h-screen">
        <SearchableBar />
        <Outlet />
      </div>
    </Suspense>
  );
}
