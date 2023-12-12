const DateDisplay = ({date}) => {
  return new Date(date).toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default DateDisplay;
