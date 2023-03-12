export const getFormattedDate = () => {
  const dateFull = new Date().toLocaleDateString();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date();
  return `${days[day.getDay()]} ${dateFull}`;
};
