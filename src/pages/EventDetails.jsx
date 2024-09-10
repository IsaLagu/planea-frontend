import { Link, useParams } from "react-router-dom";
import useGet from "../hooks/useGet";

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
        <div className="w-[500px]">
          <img className="rounded-t-lg" src={event.imageUrl} alt="" />
        </div>
        <div className="p-2">
          <h5 className="mb-2 text-2xl font-medium tracking-tight leading-6 text-darkGrey">{event.title}</h5>
          <p className="mb-1 font-medium">{event.description}</p>
          <p className="mb-1">{event.location}</p>
          <p className="mb-1">{event.location}</p>
          <p className="mb-1">{event.cityId}</p>
          <p className="mb-1">{`${event.startTime}, `}</p>
          <p className="mb-1">{`${event.endTime}, `}</p>
          <p className="sm">{`${event.capacity}€`}</p>
          <p className="sm">{`${event.price}€`}</p>
        </div>
      </div>
    </div>
  );
};
