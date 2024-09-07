import * as yup from "yup";

export const CreateEventSchema = yup.object().shape({
  name: yup.string().required("El campo nombre es obligatorio"),
});
