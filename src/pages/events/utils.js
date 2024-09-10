import dayjs from "dayjs";

export function convertToIsoDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export const formatDateTime = (date) => dayjs(date).format("ddd, D MMM YYYY HH:mm");
