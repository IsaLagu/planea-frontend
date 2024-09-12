import { useState } from "react";
import { EventCard } from "../components/EventCard";
import useGet from "../hooks/useGet";
import { ModalDelete } from "../components/ModalDelete";
import useDelete from "../hooks/useDelete";
import { Spinner } from "../components/Spinner";

export const MyEvents = () => {
  const { data: events, loading, error, executeGet } = useGet(`/api/events/user`);
  const [eventIdToDelete, setEventIdToDelete] = useState(null);
  const { executeDelete } = useDelete(`/api/events/${eventIdToDelete}`);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (eventId) => {
    setEventIdToDelete(eventId);
    setIsModalOpen(true);
  };

  const handleDeleteSubmit = () => {
    setIsModalOpen(false);
    executeDelete();
    setTimeout(() => {
      executeGet();
    }, 500);
  };

  return (
    <div className="max-w-screen-xl flex flex-wrap mx-auto justify-center gap-x-8 gap-y-10">
      {events?.length ? (
        events.map((event) => <EventCard onDelete={() => handleDelete(event.id)} event={event} key={event.id} />)
      ) : (
        <>{!loading && <p className="text-2xl text-darkGrey font-medium">No hay eventos disponibles</p>}</>
      )}
      {loading && <Spinner />}
      {error && <p>Error: {error.message}</p>}
      {isModalOpen && <ModalDelete onOk={handleDeleteSubmit} onClose={handleCloseModal} />}
    </div>
  );
};
