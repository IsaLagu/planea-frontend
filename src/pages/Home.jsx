import { EventCard } from "../components/EventCard";
import useGet from "../hooks/useGet";

export const Home = () => {
  const { data: events, loading, error } = useGet(`/api/events`);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-8 lg:gap-4">
      {events?.length ? (
        events.map((event) => <EventCard key={event.id} event={event} />)
      ) : (
        <p>No hay eventos disponibles</p>
      )}
    </div>
  );
};
