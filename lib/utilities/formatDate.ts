import moment from "moment";

export default function formatDate(date: string) {
  const newDate = moment(date).format("DD MMM, YYYY");
  return newDate;
}
