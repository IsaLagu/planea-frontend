import * as yup from "yup";

export const createEventSchema = yup.object().shape({
  name: yup.string().required("El nombre es obligatorio").max(50, "No puedes exceder los 50 caracteres"),
  description: yup.string().max(50, "No puedes exceder los 50 caracteres"),
  location: yup.string().required("La ciudad es obligatoria"),
  address: yup.string().required("La ubicación es obligatoria").max(50, "No puedes exceder los 50 caracteres"),
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
    .test("fileSize", "El archivo es demasiado grande", (value) => {
      return value && value[0] && value[0].size <= 5 * 1024 * 1024;
    })
    .test("fileType", "El formato de la imagen no es válido", (value) => {
      return value && value[0] && ["image/jpeg", "image/png"].includes(value[0].type);
    })
    .nullable()
    .notRequired(),
  price: yup
    .string()
    .matches(/^\d+(\.\d{1,2})?$/, "El precio debe ser un número válido")
    .nullable(),
  capacity: yup.string().matches(/^\d+$/, "La capacidad debe ser un número válido").nullable(),
});
