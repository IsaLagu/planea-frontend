import { useParams } from "react-router-dom";
import useGet from "../hooks/useGet";
import { formatDateTime } from "./events/utils";

export const EventDetails = () => {
  const { id } = useParams();
  const { data: event, loading, error } = useGet(`/api/events/${id}`);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="flex justify-center">
      <div className="text-darkGrey borderrounded-lg relative">
        <div className="flex justify-center">
          <img className="rounded-lg" src={event.imageUrl} alt="" />
        </div>
        <div className="p-2">
          <h5 className="my-8 text-5xl font-medium tracking-tight text-primary">{event.title}</h5>
          <h3 className="text-2xl font-medium">Acerca de este evento</h3>
          <p className="mb-4">{event.description}</p>
          <h3 className="text-2xl font-medium">Ubicación</h3>
          <p className="mb-4">{`${event.location} - ${event.city.name}`}</p>
          <h3 className="text-2xl font-medium">Fecha y Hora</h3>
          <p className="mb-4">{`${formatDateTime(event.startDate)} - ${formatDateTime(event.endDate)}`}</p>
          <p className="mb-4 text-xl font-medium">{`Desde ${event.price}€`}</p>
        </div>
      </div>
    </div>
  );
};
