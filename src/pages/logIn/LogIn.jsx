import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { logInSchema } from "./logInSchema";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import usePost from "../../hooks/usePost";
import { useEffect } from "react";

export const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(logInSchema),
  });

  const { error, executePost, data } = usePost("/auth/login");
  const { setToken } = useUser();
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    executePost(formData);
  };

  useEffect(() => {
    if (data) {
      setToken(data.token);
      navigate("/");
    }
  }, [data, setToken, navigate]);

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto pt-12">
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-darkGrey">
          Email
        </label>
        <Input {...register("email")} type="email" id="email" placeholder="johnDoe@planea.com" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-darkGrey">
          Contraseña
        </label>
        <Input {...register("password")} type="password" id="password" />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

        {error && <p className="text-red-500 text-sm">Email o contraseña incorrecto</p>}
      </div>

      <Button>Enviar</Button>
    </form>
  );
};
