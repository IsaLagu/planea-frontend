import { Link } from "react-router-dom";
import { formatDateTime } from "../pages/events/utils";

export const EventCard = ({ event, onDelete }) => {
  return (
    <div className="w-[275px] h-[350px] text-darkGrey text-sm border border-gray-200 rounded-lg shadow relative">
      <div>
        <Link to={`/events/${event.id}`}>
          <img className="rounded-t-lg" src={event.imageUrl} alt={event.title} />
        </Link>
        {onDelete && (
          <button type="button" onClick={onDelete}>
            <svg
              className="absolute top-0 right-0 m-2"
              width="50px"
              height="50px"
              viewBox="-2.4 -2.4 28.80 28.80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0">
                <rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#7b03d9" strokeWidth="0"></rect>
              </g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M10 11V17"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M14 11V17"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path d="M4 7H20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>{" "}
                <path
                  d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        )}
      </div>
      <div className="p-2">
        <h5 className="mb-2 text-2xl font-medium tracking-tight leading-6 text-darkGrey">{event.title}</h5>
        <p className="mb-1">{event.location}</p>
        <p className="mb-1">{event.city.name}</p>
        <p className="mb-1">{formatDateTime(event.startDate)}</p>
        <p className="sm">{event.price === 0 ? "Gratis" : `Desde ${event.price}€`}</p>
      </div>
      <Link
        to={`/events/${event.id}`}
        className="absolute bottom-0 right-0 inline-flex items-center mx-2 mb-2 px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-lightViolet focus:outline-none"
      >
        Ver evento
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  );
};
