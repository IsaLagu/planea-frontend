import { Input } from "../../components/Input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Autocomplete from "react-google-autocomplete";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { CreateEventSchema } from "./createEventSchema";

export const CreateEvent = () => {
  const [selected, setSelected] = useState(new Date());

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

        <Autocomplete
          // apiKey={YOUR_GOOGLE_MAPS_API_KEY}
          onPlaceSelected={(place) => {
            console.log(place);
          }}
        />

        <div className="block mb-2 font-medium tracking-wide text-darkGrey">Fecha del evento</div>
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          footer={selected ? `Fecha seleccionada: ${selected.toLocaleDateString()}` : "Elige una fecha."}
          className="mb-5"
        />
        <div className="mb-5">
          <label className="block mb-2 font-medium tracking-wide text-darkGrey" htmlFor="event_img">
            Imagen del evento
          </label>
          <Input className="cursor-pointer text-gray-500" id="event_img" type="file" />
          <div className="mt-1 text-sm text-gray-500">Añade una imagen a tu evento</div>
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
