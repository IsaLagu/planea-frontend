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
      <h1 className="text-primary text-center text-3xl font-bold mb-9">Crea tu evento</h1>
      <form noValidate onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
        <div className="mb-9">
          <label htmlFor="name" className="block mb-2 font-medium tracking-wide text-darkGrey">
            Nombre del evento
          </label>
          <Input {...register("name")} type="name" id="name" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div className="mb-9">
          <label htmlFor="location" className="block mb-2 font-medium tracking-wide text-darkGrey">
            Ciudad
          </label>
          <Autocomplete
            // apiKey={YOUR_GOOGLE_MAPS_API_KEY}
            id="location"
            className="shadow-sm bg-gray-50 border border-gray-300 text-darkGrey text-sm rounded-lg focus:outline-none focus:border-primary focus:border-2 w-full p-2.5"
            onPlaceSelected={(place) => {
              console.log(place);
            }}
          />
        </div>

        <div className="mb-9">
          <label htmlFor="address" className="block mb-2 font-medium tracking-wide text-darkGrey">
            Ubicación
          </label>
          <Input {...register("address")} type="name" id="address" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
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
            onChange={(newValue) => setValue(newValue)}
          />
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
                className="bg-gray-50 border leading-none border-gray-300 text-darkGrey text-sm rounded-lg focus:outline-none focus:border-primary focus:border-2 block w-full p-2.5"
                min="09:00"
                max="18:00"
                value="00:00"
                required
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
                className="bg-gray-50 border leading-none border-gray-300 text-darkGrey text-sm rounded-lg focus:outline-none focus:border-primary focus:border-2 block w-full p-2.5"
                min="09:00"
                max="18:00"
                value="00:00"
                required
              />
            </div>
          </div>
        </div>

        <div class="max-w-sm mb-9">
          <label for="countries_multiple" class="block mb-2 font-medium text-darkGrey">
            Categoría
          </label>
          <select
            multiple
            id="countries_multiple"
            class="bg-gray-50 border border-gray-300 text-darkGrey text-sm rounded-lg focus:outline-none focus:border-primary focus:border-2 block w-full p-2.5"
          >
            <option selected>Elige una categoría</option>
            <option value="DR">Deportes y Recreación</option>
            <option value="AC">Arte y Cultura</option>
            <option value="FF">Festivales y Ferias</option>
            <option value="EA">Educación y Aprendizaje</option>
            <option value="CT">Ciencia y Tecnología</option>
            <option value="TM">Talleres y Manualidades</option>
            <option value="NM">Naturaleza y Medio Ambiente</option>
            <option value="GA">Gastronomía</option>
            <option value="JE">Juegos y Entretenimiento</option>
            <option value="EF">Eventos Familiares</option>
            <option value="ES">Eventos Sociales</option>
            <option value="BS">Bienestar y Salud</option>
            <option value="FT">Festividades y Tradiciones</option>
            <option value="JD">Juventud y Desarrollo Personal</option>
          </select>
        </div>

        <div className="mb-9">
          <label className="block mb-2 font-medium tracking-wide text-darkGrey" htmlFor="event-img">
            Imagen del evento
          </label>
          <Input className="cursor-pointer text-gray-500" id="event-img" type="file" />
          <div className="mt-1 text-sm text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px).</div>
        </div>

        <div className="mb-9">
          <label htmlFor="price" className="block mb-2 font-medium tracking-wide text-darkGrey">
            Precio de las entradas
          </label>
          <Input type="text" id="price" placeholder="0,00€" />
        </div>

        <div className="mb-9">
          <label htmlFor="capacity" className="block mb-2 font-medium tracking-wide text-darkGrey">
            Capacidad
          </label>
          <Input type="text" id="capacity" placeholder="nº de personas" />
        </div>
      </form>
    </>
  );
};
