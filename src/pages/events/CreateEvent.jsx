import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Datepicker from "react-tailwindcss-datepicker";
import { Input } from "../../components/Input";
import { categories, cities } from "./constants";

// Importa el esquema de validación
import { CreateEventSchema } from "./createEventSchema";
import { Button } from "../../components/Button";

export const CreateEvent = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue: setFormValue,
  } = useForm({
    resolver: yupResolver(CreateEventSchema),
    mode: "onChange",
  });

  const onSubmit = (formData) => {
    executePost(formData);
  };

  return (
    <>
      <h1 className="text-primary text-center text-3xl font-bold mb-9">Crea tu evento</h1>
      <form noValidate onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
        <div className="mb-9">
          <label htmlFor="name" className="block mb-2 font-medium tracking-wide text-darkGrey">
            Nombre del evento
          </label>
          <Input {...register("name")} type="text" id="name" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div className="mb-9">
          <label htmlFor="location" className="block mb-2 font-medium tracking-wide text-darkGrey">
            Ciudad
          </label>
          <select
            id="location"
            {...register("location")}
            className="bg-gray-50 border border-gray-300 text-darkGrey text-sm rounded-lg focus:outline-none focus:border-primary focus:border-2 block shadow-sm w-full p-2.5"
          >
            {cities.map((city) => (
              <option
                key={city.id}
                className="hover:bg-primary checked:bg-primary active:bg-primary p-1 mb-0.5 rounded-md hover:text-white checked:text-white"
                value={city.id}
              >
                {city.name}
              </option>
            ))}
          </select>
          {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
        </div>

        <div className="mb-9">
          <label htmlFor="address" className="block mb-2 font-medium tracking-wide text-darkGrey">
            Ubicación
          </label>
          <Input {...register("address")} type="text" id="address" />
          {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
        </div>

        <div className="mb-9">
          <label className="block mb-2 font-medium tracking-wide text-darkGrey" htmlFor="event-date">
            Fecha
          </label>
          <Datepicker
            id="event-date"
            primaryColor="violet"
            i18n={"es"}
            startWeekOn="mon"
            separator="hasta"
            inputClassName="shadow-sm bg-gray-50 border border-gray-300 text-darkGrey text-sm rounded-lg focus:outline-none focus:border-primary focus:border-2 w-full p-2.5"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
              setFormValue("date", newValue); // Actualiza el valor en el formulario
            }}
          />
          {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
        </div>

        <div className="block mb-2 font-medium tracking-wide text-darkGrey">Hora</div>
        <div className="max-w-[16rem] grid grid-cols-2 gap-4 mb-9">
          <div>
            <label htmlFor="start-time" className="block mb-2 text-sm font-medium text-darkGrey">
              Hora de inicio:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-grey"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="time"
                id="start-time"
                {...register("startTime")}
                className="bg-gray-50 border leading-none border-gray-300 text-darkGrey text-sm rounded-lg focus:outline-none focus:border-primary focus:border-2 block w-full p-2.5"
                min="09:00"
                max="18:00"
              />
            </div>
          </div>
          <div>
            <label htmlFor="end-time" className="block mb-2 text-sm font-medium text-darkGrey">
              Hora de fin:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-grey"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="time"
                id="end-time"
                {...register("endTime")}
                className="bg-gray-50 border leading-none border-gray-300 text-darkGrey text-sm rounded-lg focus:outline-none focus:border-primary focus:border-2 block w-full p-2.5"
                min="09:00"
                max="18:00"
              />
            </div>
          </div>
        </div>

        <div className="max-w-sm mb-9">
          <label htmlFor="category" className="block mb-2 font-medium text-darkGrey">
            Categoría
          </label>
          <select
            id="category"
            {...register("category")}
            multiple
            className="bg-gray-50 border border-gray-300 text-darkGrey text-sm rounded-lg focus:outline-none focus:border-primary focus:border-2 block w-full p-2.5"
          >
            <option disabled>Elige una o varias categorías</option>
            {categories.map((category) => (
              <option
                key={category.id}
                className="hover:bg-primary checked:bg-primary active:bg-primary p-1 mb-0.5 rounded-md hover:text-white checked:text-white"
                value={category.id}
              >
                {category.name}
              </option>
            ))}
          </select>
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        </div>

        <div className="mb-9">
          <label className="block mb-2 font-medium tracking-wide text-darkGrey" htmlFor="event-img">
            Imagen del evento
          </label>
          <Input {...register("image")} className="cursor-pointer text-gray-500" id="event-img" type="file" />
          <div className="mt-1 text-sm text-gray-500">SVG, PNG, JPG o GIF (MAX. 800x400px).</div>
          {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
        </div>

        <div className="mb-9">
          <label htmlFor="price" className="block mb-2 font-medium tracking-wide text-darkGrey">
            Precio de las entradas
          </label>
          <Input {...register("price")} type="text" id="price" placeholder="0,00€" />
          {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
        </div>

        <div className="mb-9">
          <label htmlFor="capacity" className="block mb-2 font-medium tracking-wide text-darkGrey">
            Capacidad
          </label>
          <Input {...register("capacity")} type="text" id="capacity" placeholder="nº de personas" />
          {errors.capacity && <p className="text-red-500 text-sm">{errors.capacity.message}</p>}
        </div>

        <Button>Crear Evento</Button>
      </form>
    </>
  );
};
