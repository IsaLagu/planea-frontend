import * as yup from "yup";

export const createEventSchema = yup.object().shape({
  title: yup.string().required("El nombre es obligatorio").max(50, "No puedes exceder los 50 caracteres"),
  description: yup.string().max(250, "No puedes exceder los 250 caracteres"),
  cityId: yup.string().required("La ciudad es obligatoria"),
  location: yup.string().required("La ubicación es obligatoria").max(50, "No puedes exceder los 50 caracteres"),
  categoryIds: yup.array().min(1, "Debes seleccionar al menos una categoría").required("La categoría es obligatoria"),
  image: yup
    .mixed()
    .test("required", "Subir una imagen es obligatorio", (value) => {
      return value && value.length > 0;
    })
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
    .notRequired()
    .test(
      "is-valid-price",
      "El precio debe ser un número válido",
      (value) => !value || /^\d+(\.\d{1,2})?$/.test(value)
    ),

  capacity: yup
    .string()
    .notRequired()
    .test("is-valid-capacity", "La capacidad debe ser un número válido", (value) => !value || /^\d+$/.test(value)),
});
