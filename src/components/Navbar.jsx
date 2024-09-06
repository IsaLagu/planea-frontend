import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_planea.png";
import LoggedInMenu from "./LoggedInMenu";
import { useUser } from "../context/UserContext";

const itemClassName =
  "block py-2 px-3 text-white bg-primary hover:text-primary md:hover:bg-lightPink rounded-2xl md:p-1 md:px-3";

export const Navbar = () => {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="bg-primary max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} className="h-8" alt="planea logo" />
          <span className="self-center text-2xl text-white font-semibold whitespace-nowrap">Planea</span>
        </Link>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-white"
          aria-controls="navbar-dropdown"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div onClick={toggleMenu} className={`w-full ${isOpen ? "block" : "hidden"} md:block md:w-auto p-0`}>
          <ul className="font-medium md:p-0 mt-4 md:space-x-2 md:flex-row md:mt-0 md:border-0 flex items-center flex-col md:flex">
            <li>
              <Link to="/" className={itemClassName}>
                Encuentra eventos
              </Link>
            </li>
            <li>
              <Link to="/" className={itemClassName}>
                Crea eventos
              </Link>
            </li>
            {user ? (
              <LoggedInMenu />
            ) : (
              <>
                <li>
                  <Link to="/login" className={itemClassName}>
                    Inicia sesión
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className={itemClassName}>
                    Regístrate
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
