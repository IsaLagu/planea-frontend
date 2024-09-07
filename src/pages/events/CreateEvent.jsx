import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Datepicker from "react-tailwindcss-datepicker";
import { Input } from "../../components/Input";

import Autocomplete from "react-google-autocomplete";
import { CreateEventSchema } from "./createEventSchema";

export const CreateEvent = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreateEventSchema),
  });

  const onSubmit = (formData) => {
    executePost(formData);
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 font-medium tracking-wide text-darkGrey">
            Nombre del evento
          </label>
          <Input {...register("name")} type="name" id="name" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div className="mb-5">
          <label htmlFor="location" className="block mb-2 font-medium tracking-wide text-darkGrey">
            Ubicación
          </label>
          <Autocomplete
            // apiKey={YOUR_GOOGLE_MAPS_API_KEY}
            id="location"
            className="shadow-sm bg-gray-50 border border-gray-300 text-darkGrey text-sm rounded-lg focus:outline-none focus:border-primary w-full p-2.5"
            onPlaceSelected={(place) => {
              console.log(place);
            }}
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 font-medium tracking-wide text-darkGrey" htmlFor="event-date">
            Fecha del evento
          </label>
          <Datepicker
            id="event-date"
            primaryColor="violet"
            i18n={"es"}
            startWeekOn="mon"
            separator="hasta"
            inputClassName="shadow-sm bg-gray-50 border border-gray-300 text-darkGrey text-sm rounded-lg focus:outline-none focus:border-primary w-full p-2.5"
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 font-medium tracking-wide text-darkGrey" htmlFor="event-img">
            Imagen del evento
          </label>
          <Input className="cursor-pointer text-gray-500" id="event-img" type="file" />
          <div className="mt-1 text-sm text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px).</div>
        </div>

        <div className="mb-5">
          <label htmlFor="price" className="block mb-2 font-medium tracking-wide text-darkGrey">
            Precio de las entradas
          </label>
          <Input type="text" id="price" placeholder="0,00€" />
        </div>

        <div className="mb-5">
          <label htmlFor="capacity" className="block mb-2 font-medium tracking-wide text-darkGrey">
            Capacidad del evento
          </label>
          <Input type="text" id="capacity" placeholder="nº de personas" />
        </div>
      </form>
    </>
  );
};
