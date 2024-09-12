import { EventCard } from "../components/EventCard";
import { SearchInput } from "../components/SearchInput";
import { Spinner } from "../components/Spinner";
import useGet from "../hooks/useGet";

export const Home = () => {
  const { data: events, loading: eventsLoading, error: eventsError } = useGet(`/api/events`);
  const { data: cities, loading: citiesLoading, error: citiesError } = useGet(`/api/cities`);

  return (
    <div>
      <p className="text-center text-3xl font-bold text-primary mb-10">Encuentra lo que te gusta</p>

      <SearchInput cities={cities || []} />

      <div className="max-w-screen-xl flex flex-wrap mx-auto justify-center gap-x-8 gap-y-10">
        {events?.length ? (
          events.map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <>{!eventsLoading && <p className="text-2xl text-darkGrey font-medium">No hay eventos disponibles</p>}</>
        )}
        {eventsLoading && <Spinner />}
        {eventsError && <p>Error: {eventsError.message}</p>}
      </div>
    </div>
  );
};
