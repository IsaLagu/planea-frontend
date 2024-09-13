export const ModalTerms = ({ onClose, onOk }) => {
  return (
    <>
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 justify-center items-center w-full h-full bg-black bg-opacity-50 flex"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow max-h-[650px] overflow-auto">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold text-gray-900">Política de Términos y Condiciones</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                onClick={onClose}
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

            <div className="p-4 md:p-5 space-y-4">
              <div>
                <h1>Política de Privacidad</h1>
                <p>
                  <strong>1. Responsable del Tratamiento</strong>
                </p>
                <p>
                  <strong>Nombre:</strong> Planea S.L.
                  <br />
                  <strong>Dirección:</strong> Calle de la Innovación, 12, 28001 Madrid, España
                  <br />
                  <strong>Email:</strong> <a href="mailto:contacto@planea.com">contacto@planea.com</a>
                  <br />
                  <strong>Teléfono:</strong> +34 912 345 678
                </p>
                <p>
                  <strong>2. Datos Recopilados</strong>
                </p>
                <p>
                  Recopilamos:
                  <br />- <strong>Datos personales:</strong> nombre, email, teléfono.
                  <br />- <strong>Datos de navegación:</strong> IP, cookies.
                </p>
                <p>
                  <strong>3. Uso de los Datos</strong>
                </p>
                <p>
                  Tus datos se usan para:
                  <br />
                  - Gestionar tu cuenta y servicios.
                  <br />
                  - Enviar comunicaciones sobre nuestros productos y ofertas.
                  <br />- Mejorar la experiencia en nuestro sitio web.
                </p>
                <p>
                  <strong>4. Derechos del Usuario</strong>
                </p>
                <p>
                  Puedes:
                  <br />- <strong>Acceder</strong> a tus datos.
                  <br />- <strong>Rectificar</strong> datos incorrectos.
                  <br />- <strong>Eliminar</strong> tus datos.
                  <br />- <strong>Limitar</strong> o <strong>oponerte</strong> al tratamiento.
                </p>
                <p>
                  Para ejercer tus derechos, contacta a: <a href="mailto:contacto@planea.com">contacto@planea.com</a>.
                </p>
                <p>
                  <strong>5. Seguridad</strong>
                </p>
                <p>Implementamos medidas para proteger tus datos.</p>
                <p>
                  <strong>6. Cambios</strong>
                </p>
                <p>
                  Actualizaremos esta política según sea necesario. Consulta la última versión en nuestro sitio web.
                </p>

                <h1>Términos y Condiciones</h1>
                <p>
                  <strong>1. Servicios</strong>
                </p>
                <p>
                  Planea S.L. ofrece [descripción breve de servicios, e.g., "soluciones de planificación empresarial"].
                </p>
                <p>
                  <strong>2. Registro</strong>
                </p>
                <p>Para acceder a nuestros servicios, debes registrarte con información precisa y actualizada.</p>
                <p>
                  <strong>3. Uso Aceptable</strong>
                </p>
                <p>Te comprometes a usar nuestros servicios de manera legal y no dañina.</p>
                <p>
                  <strong>4. Propiedad Intelectual</strong>
                </p>
                <p>
                  Todos los contenidos de nuestro sitio web están protegidos. No puedes reproducir ni modificar sin
                  permiso.
                </p>
                <p>
                  <strong>5. Responsabilidad</strong>
                </p>
                <p>
                  No nos responsabilizamos de interrupciones o errores en el servicio ni de daños derivados de virus.
                </p>
                <p>
                  <strong>6. Modificaciones</strong>
                </p>
                <p>Podemos cambiar estos términos. Las actualizaciones se publicarán en nuestro sitio web.</p>
                <p>
                  <strong>7. Legislación</strong>
                </p>
                <p>
                  Estos términos se rigen por la ley española. Para cualquier disputa, se somete a los tribunales de
                  Madrid.
                </p>
              </div>
            </div>

            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
              <button
                onClick={onOk}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Aceptar
              </button>
              <button
                onClick={onClose}
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
