import SearchableBar from "../components/searchable-bar.tsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <SearchableBar />
      <Outlet />
    </div>
  );
}
