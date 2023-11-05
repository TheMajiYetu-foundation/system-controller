import { Outlet } from "react-router-dom";
import NavSide from "../components/navigation/NavSide";
import TopNav from "../components/navigation/TopNav";

export default function HomeWrapper() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-base-100">
        
        {/* Navbar */}
        <TopNav />
        <div className="px-3 pt-3">
          <Outlet />
        </div>
      </div>
      <NavSide />
    </div>
  );
}
