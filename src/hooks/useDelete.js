import { useUser } from "../context/UserContext";
import useFetch from "./useFetch";

const useDelete = (endpoint) => {
  const { token } = useUser();
  const { data, deleteLoading, deleteError, fetch } = useFetch(endpoint, {}, false);

  const executeDelete = () => {
    fetch({
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
  };

  return { data, deleteLoading, deleteError, executeDelete };
};

export default useDelete;
