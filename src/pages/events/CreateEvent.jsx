import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Datepicker from "react-tailwindcss-datepicker";
import { Input } from "../../components/Input";

import { createEventSchema } from "./createEventSchema";
import { Button } from "../../components/Button";
import useGet from "../../hooks/useGet";
import { convertToIsoDateString } from "./utils";
import usePost from "../../hooks/usePost";

const preset_name = "yu1h90st";
const cloud_name = "dtftuh9ky";

export const CreateEvent = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const [imageUrl, setImageUrl] = useState("");

  const { data: cities } = useGet("/api/cities");
  const { data: categories } = useGet("/api/categories");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue: setFormValue,
    trigger,
  } = useForm({
    resolver: yupResolver(createEventSchema),
  });

  const { error, executePost, data } = usePost("/api/events");
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data, navigate]);

  const onSubmit = (formData) => {
    const startDate = `${convertToIsoDateString(formData.date.startDate)}T${
      formData.startTime ? formData.startTime + ":00" : "00:00:00"
    }`;
    const endDate = `${convertToIsoDateString(formData.date.endDate)}T${
      formData.endTime ? formData.endTime + ":00" : "00:00:00"
    }`;
    const parsedFormData = {
      ...formData,
      date: undefined,
      image: undefined,
      startTime: undefined,
      endTime: undefined,
      category: undefined,
      imageUrl,
      startDate,
      endDate,
      price: Number(formData.price),
      capacity: Number(formData.capacity),
    };
    executePost(parsedFormData);
  };

  const uploadImage = async (e) => {
    const files = e.target.files;

    setFormValue("image", e.target.files);
    trigger("image");

    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", preset_name);

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
        method: "POST",
        body: data,
      });

      const file = await response.json();
      setImageUrl(file.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <>
      <h1 className="text-primary text-center text-3xl font-bold mb-9">Crea tu evento</h1>
      <form noValidate onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
        <div className="mb-9">
          <label htmlFor="title" className="block mb-2 font-medium tracking-wide text-darkGrey">
            Nombre del evento
          </label>
          <Input {...register("title")} type="text" id="title" />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

        <div className="mb-9">
          <label htmlFor="description" className="block mb-2 font-medium tracking-wide text-darkGrey">
            Descripción (opcional)
          </label>
          <Input {...register("description")} type="text" id="description" />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>

        <div className="mb-9">
          <label htmlFor="cityId" className="block mb-2 font-medium tracking-wide text-darkGrey">
            Ciudad
          </label>
          <select
            id="cityId"
            {...register("cityId")}
            className="bg-gray-50 border border-gray-300 text-darkGrey text-sm rounded-lg focus:outline-none focus:border-primary focus:border-2 block shadow-sm w-full p-2.5"
          >
            {(cities || []).map((city) => (
              <option
                key={city.id}
                className="hover:bg-primary checked:bg-primary active:bg-primary p-1 mb-0.5 rounded-md hover:text-white checked:text-white"
                value={city.id}
              >
                {city.name}
              </option>
            ))}
          </select>
          {errors.cityId && <p className="text-red-500 text-sm">{errors.cityId.message}</p>}
        </div>

        <div className="mb-9">
          <label htmlFor="location" className="block mb-2 font-medium tracking-wide text-darkGrey">
            Ubicación
          </label>
          <Input {...register("location")} type="text" id="location" />
          {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
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
              setFormValue("date", newValue);
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
          <label htmlFor="categoryIds" className="block mb-2 font-medium text-darkGrey">
            Categoría
          </label>
          <select
            id="categoryIds"
            {...register("categoryIds")}
            multiple
            className="bg-gray-50 border border-gray-300 text-darkGrey text-sm rounded-lg focus:outline-none focus:border-primary focus:border-2 block w-full p-2.5"
          >
            <option disabled>Elige una o varias categorías</option>
            {(categories || []).map((category) => (
              <option
                key={category.id}
                className="hover:bg-primary checked:bg-primary active:bg-primary p-1 mb-0.5 rounded-md hover:text-white checked:text-white"
                value={category.id}
              >
                {category.name}
              </option>
            ))}
          </select>
          {errors.categoryIds && <p className="text-red-500 text-sm">{errors.categoryIds.message}</p>}
        </div>

        <div className="block mb-2 font-medium tracking-wide text-darkGrey">Imagen del evento</div>
        <div className="flex items-center justify-center w-full mb-9">
          <label
            htmlFor="file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              {imageUrl ? (
                <img className="max-w-[300px]" src={imageUrl} />
              ) : (
                <>
                  {" "}
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Cliquea para subir una imagen</span> o arrastra una imagen
                  </p>
                </>
              )}
              <p className="text-xs text-gray-500">PNG o JPG (MAX. 5MB)</p>
            </div>
            <input id="file" onChange={(e) => uploadImage(e)} type="file" className="hidden" />
          </label>
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
