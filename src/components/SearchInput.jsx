import { useState } from "react";
import { Spinner } from "./Spinner";

export const SearchInput = ({ cities, citiesLoading, citiesError, onSearch }) => {
  const [selectedCity, setSelectedCity] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(selectedCity, eventTitle);
  };

  return (
    <form className="max-w-lg mx-auto mb-10" onSubmit={handleSearch}>
      <div className="flex">
        <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-darkGrey sr-only">
          Your Email
        </label>
        <button
          id="dropdown-button"
          onClick={toggleDropdown}
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-primary border-gray-300 rounded-s-lg hover:bg-lightViolet focus:ring-4 focus:outline-none focus:ring-primary"
          type="button"
        >
          {selectedCity ? selectedCity.name : "Ciudades de Tenerife"}
          <svg
            className="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>
        {isDropdownOpen && (
          <div
            id="dropdown"
            className="z-10 p-2 mt-4 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute"
          >
            <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdown-button">
              {citiesLoading && <Spinner />}
              {citiesError && <p>Error: {citiesError.message}</p>}
              {!citiesLoading && !citiesError && cities && cities.length > 0
                ? cities.map((city) => (
                    <li key={city.id}>
                      <button
                        className="p-1 hover:bg-primary hover:text-white w-full text-left"
                        onClick={() => {
                          setSelectedCity(city);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {city.name}
                      </button>
                    </li>
                  ))
                : !citiesLoading && !citiesError && <p>No hay ciudades disponibles</p>}
            </ul>
          </div>
        )}
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gdarkGrey bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:outline-none focus:border-2 focus:border-primary"
            placeholder="Busca un evento"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-primary rounded-e-lg border border-primary hover:bg-lightViolet focus:ring-4 focus:outline-none focus:ring-primary"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Buscar</span>
          </button>
        </div>
      </div>
    </form>
  );
};
