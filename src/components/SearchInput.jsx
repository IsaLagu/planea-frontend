export const SearchInput = () => {
  return (
    <form class="max-w-lg mx-auto mb-10">
      <div class="flex">
        <label for="search-dropdown" class="mb-2 text-sm font-medium text-darkGrey sr-only">
          Your Email
        </label>
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-primary border-gray-300 rounded-s-lg hover:bg-lightViolet focus:ring-4 focus:outline-none focus:ring-primary"
          type="button"
        >
          Ciudades{" "}
          <svg
            class="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
          <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdown-button">
            <li></li>
          </ul>
        </div>
        <div class="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            class="block p-2.5 w-full z-20 text-sm text-gdarkGrey bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:outline-none focus:border-2 focus:border-primary"
            placeholder="Busca eventos"
            required
          />
          <button
            type="submit"
            class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-primary rounded-e-lg border border-primary hover:bg-lightViolet focus:ring-4 focus:outline-none focus:ring-primary"
          >
            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span class="sr-only">Buscar</span>
          </button>
        </div>
      </div>
    </form>
  );
};
