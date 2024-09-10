import { Link } from "react-router-dom";

export const EventCard = ({ imageUrl, title, cityId, location, startTime, price }) => {
  return (
    <div className="w-[300px] h-[375px] text-darkGrey text-sm border border-gray-200 rounded-lg shadow relative">
      <div>
        <Link>
          <img className="rounded-t-lg object-cover" src={imageUrl} alt="" />
        </Link>
      </div>
      <div className="p-2">
        <Link>
          <h5 className="mb-2 text-2xl font-medium tracking-tight leading-6 text-darkGrey">{title}</h5>
        </Link>
        <p className="mb-1">{location}</p>
        <p className="mb-1">{cityId}</p>
        <p className="mb-1">{`${startTime}, `}</p>
        <p className="sm">{`${price}€`}</p>
      </div>
      <Link className="absolute bottom-0 right-0 inline-flex items-center mx-2 mb-2 px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-lightViolet focus:outline-none">
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
