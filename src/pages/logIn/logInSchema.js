import * as yup from "yup";

export const logInSchema = yup.object().shape({
  email: yup.string("El formato email no es válido").required("El email es obligatorio"),
  password: yup.string().required("La contraseña es obligatoria"),
});
