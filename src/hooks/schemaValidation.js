import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  email: yup.string().email("El formato email no es válido").required("El campo email es obligatorio"),
  password: yup
    .string()
    .required("La contraseña es obligatoria")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden")
    .required("Repetir la contraseña es obligatorio"),
});
