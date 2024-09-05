import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { signUpSchema } from "../hooks/schemaValidation";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data) => {
    console.log(data); // Aquí manejas el envío del formulario
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-darkGrey">
          Tu email
        </label>
        <Input {...register("email")} type="email" id="email" className="" placeholder="nombre@planea.com" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-darkGrey">
          Tu contraseña
        </label>
        <Input {...register("password")} type="password" id="password" className="" placeholder="" />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      <div className="mb-5">
        <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-darkGrey">
          Repite tu contraseña
        </label>
        <Input {...register("repeatPassword")} type="password" id="repeat-password" className="" placeholder="" />
        {errors.repeatPassword && <p className="text-red-500 text-sm">{errors.repeatPassword.message}</p>}
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

      <Button onClick={onclick} text="Crea una nueva cuenta" className="" />
    </form>
  );
};
