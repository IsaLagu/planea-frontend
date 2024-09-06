import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
