export const ModalTerms = ({ onClose, onOk }) => {
  return (
    <>
      {/* Botón para abrir el modal */}
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 justify-center items-center w-full h-full bg-black bg-opacity-50 flex"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            {/* Header del modal */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold text-gray-900">Términos de Servicio</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                onClick={onClose} // Cierra el modal
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Cerrar modal</span>
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-gray-500">
                Aquí están los términos y condiciones de nuestra plataforma. Por favor, léelos detenidamente antes de
                continuar.
              </p>
              {/* Puedes incluir más texto o detalles aquí */}
            </div>

            {/* Footer con los botones de Aceptar y Rechazar */}
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
              <button
                onClick={onOk} // Acepta los términos
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Aceptar
              </button>
              <button
                onClick={onClose} // Rechaza y cierra el modal
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
              >
                Rechazar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
