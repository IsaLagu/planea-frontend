import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { signUpSchema } from "./signUpSchema";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import usePost from "../../hooks/usePost";
import { useEffect, useState } from "react";
import { ModalTerms } from "../../components/ModalTerms";

export const SignUp = () => {
  const [showModal, setShowModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const { error, executePost, data } = usePost("/auth/signup");
  const { setToken } = useUser();
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    executePost({ name: formData.name, email: formData.email, password: formData.password });
  };

  const handleTermsClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalAccept = () => {
    setTermsAccepted(true);
    setValue("terms", true);
    setShowModal(false);
  };

  useEffect(() => {
    if (data) {
      setToken(data.token);
      navigate("/");
    }
  }, [data, setToken, navigate]);

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto pt-8">
      <div className="mb-5">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-darkGrey">
          Nombre
        </label>
        <Input {...register("name")} type="name" id="name" placeholder="John Doe" />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

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
      </div>

      <div className="mb-5">
        <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-darkGrey">
          Repite contraseña
        </label>
        <Input {...register("repeatPassword")} type="password" id="repeat-password" />
        {errors.repeatPassword && <p className="text-red-500 text-sm">{errors.repeatPassword.message}</p>}
      </div>

      <div className="mb-5">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 accent-primary focus:ring-lightViolet"
              checked={termsAccepted}
              readOnly
              {...register("terms")}
            />
          </div>
          <label htmlFor="terms" className="ms-2 text-sm font-medium text-darkGrey">
            Estoy de acuerdo con los{" "}
            <button type="button" className="text-primary hover:underline" onClick={handleTermsClick}>
              términos y condiciones
            </button>
          </label>
        </div>
        {errors.terms && <p className="text-red-500 text-sm">{errors.terms.message}</p>}
      </div>

      <Button>Crear cuenta</Button>
      {showModal && <ModalTerms onClose={handleModalClose} onOk={handleModalAccept} />}
    </form>
  );
};
