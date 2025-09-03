import dayjs from "dayjs";

const monthYearDate = (date: string) => {
  return dayjs(date.replace(",", "T")).format("MMM YYYY");
};
const monthYearIsoDate = (dateIso: string) => {
  return dayjs(dateIso).format("MMM YYYY");
};

export { monthYearDate, monthYearIsoDate };
