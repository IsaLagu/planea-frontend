import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { UserProvider } from "../context/UserContext";

const Layout = () => {
  return (
    <UserProvider>
      <div>
        <Navbar />
        <main className="pt-6 pb-8 px-4 md:pt-16">
          <Outlet />
        </main>
      </div>
    </UserProvider>
  );
};

export default Layout;
