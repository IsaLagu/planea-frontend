import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { UserProvider } from "../context/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <UserProvider>
      <div>
        <Navbar />
        <main className="pt-6 pb-8 px-4 md:pt-16">
          <Outlet />
        </main>
      </div>
      <ToastContainer hideProgressBar position="bottom-right" />
    </UserProvider>
  );
};

export default Layout;
