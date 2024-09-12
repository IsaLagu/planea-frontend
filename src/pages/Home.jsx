import { useEffect, useState } from "react";
import { EventCard } from "../components/EventCard";
import { SearchInput } from "../components/SearchInput";
import { Spinner } from "../components/Spinner";
import useGet from "../hooks/useGet";

export const Home = () => {
  const { data: events, loading: eventsLoading, error: eventsError } = useGet(`/api/events`);
  const { data: cities, loading: citiesLoading, error: citiesError } = useGet(`/api/cities`);
  const [filteredEvents, setFilteredEvents] = useState([]);

  const handleSearch = (city, search) => {
    const newFilteredEvents = events.filter((event) => {
      const matchesCity = city ? event.city.id === city.id : true;
      const matchesSearch = search ? event.title.toLowerCase().includes(search.toLowerCase()) : true;
      return matchesCity && matchesSearch;
    });
    setFilteredEvents(newFilteredEvents);
  };

  useEffect(() => {
    setFilteredEvents(events || []);
  }, [events]);

  return (
    <div>
      <p className="text-center text-3xl font-bold text-primary mb-10">Encuentra lo que te gusta</p>

      <SearchInput cities={cities || []} loading={citiesLoading} error={citiesError} onSearch={handleSearch} />

      <div className="max-w-screen-xl flex flex-wrap mx-auto justify-center gap-x-8 gap-y-10">
        {filteredEvents?.length ? (
          filteredEvents.map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <>{!eventsLoading && <p className="text-2xl text-darkGrey font-medium">No hay eventos disponibles</p>}</>
        )}
        {eventsLoading && <Spinner />}
        {eventsError && <p>Error: {eventsError.message}</p>}
      </div>
    </div>
  );
};
