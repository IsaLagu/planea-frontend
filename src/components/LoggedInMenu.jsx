import { Link, useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useState, useEffect } from "react";

const itemClassName =
  "block mx-auto w-full px-4 py-2 text-white text-center bg-primary hover:text-primary hover:bg-lightPink rounded-2xl md:bg-white md:text-primary md:hover:bg-primary md:hover:text-lightPink";

const LoggedInMenu = () => {
  const { user, clearToken } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const onLogout = () => {
    clearToken();
    navigate("/");
  };

  const handleMenu = (e) => {
    e.stopPropagation();
    toggleMenu();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuElement = document.querySelector(".relative");
      if (menuElement && !menuElement.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <div className="relative">
      <button
        onClick={handleMenu}
        className="text-white focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center"
        type="button"
        aria-expanded={isOpen}
      >
        {user.email}{" "}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:absolute z-10 divide-y md:bg-white right-0 top-[45px] rounded-lg md:shadow md:w-[230px]`}
      >
        <ul className="p-2 text-sm text-white">
          <li>
            <Link to="/my-events" className={itemClassName} onClick={closeMenu}>
              Mis eventos
            </Link>
          </li>
          <li>
            <button onClick={onLogout} className={itemClassName}>
              Cierra sesión
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoggedInMenu;
