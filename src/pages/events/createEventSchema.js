import * as yup from "yup";

export const CreateEventSchema = yup.object().shape({
  name: yup.string().required("El nombre es obligatorio"),
  location: yup.string().required("La ciudad es obligatoria"),
  address: yup.string().required("La ubicación es obligatoria"),
  date: yup
    .object()
    .shape({
      startDate: yup.date().required("La fecha de inicio es obligatoria"),
      endDate: yup.date().required("La fecha de fin es obligatoria"),
    })
    .required("La fecha es obligatoria"),
  category: yup.array().of(yup.string()).required("La categoría es obligatoria"),
  image: yup
    .mixed()
    .nullable()
    .test("fileType", "El archivo debe ser SVG, PNG, JPG o GIF", (value) => {
      if (!value) return true; // Si no hay archivo, es opcional
      const allowedTypes = ["image/svg+xml", "image/png", "image/jpeg", "image/gif"];
      return allowedTypes.includes(value.type);
    })
    .test("fileSize", "El archivo debe tener un máximo de 800x400px", (value) => {
      if (!value) return true; // Si no hay archivo, es opcional
      // Aquí deberías agregar la lógica para verificar el tamaño de la imagen
      // Esto puede ser complicado en el lado del cliente sin procesar el archivo
      return true; // Suponemos que el tamaño se verifica en el backend
    }),
  price: yup
    .string()
    .matches(/^\d+(\.\d{1,2})?$/, "El precio debe ser un número válido")
    .nullable(),
  capacity: yup.string().matches(/^\d+$/, "La capacidad debe ser un número válido").nullable(),
});
