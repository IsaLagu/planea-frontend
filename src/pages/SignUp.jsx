export const SignUp = () => {
  return (
    <form className="max-w-sm mx-auto">
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-darkGrey">
          Tu email
        </label>
        <input
          type="email"
          id="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-darkGrey text-sm rounded-lg focus:outline-none focus:border-primary block w-full p-2.5"
          placeholder="nombre@planea.com"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-darkGrey">
          Tu contraseña
        </label>
        <input
          type="password"
          id="password"
          className="shadow-sm bg-gray-50 border border-gray-300 text-darkGrey text-sm rounded-lg focus:outline-none focus:border-primary block w-full p-2.5"
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-darkGrey">
          Repite tu contraseña
        </label>
        <input
          type="password"
          id="repeat-password"
          className="shadow-sm bg-gray-50 border border-gray-300 text-darkGrey text-sm rounded-lg focus:outline-none focus:border-primary block w-full p-2.5"
          required
        />
      </div>

      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 accent-primary focus:ring-lightViolet"
            required
          />
        </div>
        <label htmlFor="terms" className="ms-2 text-sm font-medium text-darkGrey">
          Estoy de acuerdo con los{" "}
          <a href="#" className="text-primary hover:underline">
            términos y condiciones
          </a>
        </label>
      </div>

      <button
        type="submit"
        className="text-white bg-primary hover:bg-lightViolet focus:ring-primary focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Crea una nueva cuenta
      </button>
    </form>
  );
};
