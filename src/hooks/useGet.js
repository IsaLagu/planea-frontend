import { useUser } from "../context/UserContext";

import useFetch from "./useFetch";

const useGet = (endpoint) => {
  const { token } = useUser();

  const { data, loading, error, fetch } = useFetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });

  return { data, loading, error, executeGet: fetch };
};

export default useGet;
