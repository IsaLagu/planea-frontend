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
    <>
      {Array.isArray(events) && events.length > 0 ? (
        events.map((event) => (
          <EventCard
            key={event.id}
            imageUrl={event.imageUrl}
            title={event.title}
            cityId={event.cityId}
            location={event.location}
            startTime={event.startTime}
            price={event.price}
          />
        ))
      ) : (
        <p>No hay eventos disponibles</p>
      )}
    </>
  );
};
