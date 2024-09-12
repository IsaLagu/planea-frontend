import { EventCard } from "../components/EventCard";
import { SearchInput } from "../components/SearchInput";
import { Spinner } from "../components/Spinner";
import useGet from "../hooks/useGet";

export const Home = () => {
  const { data: events, loading, error } = useGet(`/api/events`);

  return (
    <div>
      <SearchInput />
      <div className="max-w-screen-xl flex flex-wrap mx-auto justify-center gap-x-8 gap-y-10">
        {events?.length ? (
          events.map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <>{!loading && <p className="text-2xl text-darkGrey font-medium">No hay eventos disponibles</p>}</>
        )}
        {loading && <Spinner />}
        {error && <p>Error: {error.message}</p>}
      </div>
    </div>
  );
};
