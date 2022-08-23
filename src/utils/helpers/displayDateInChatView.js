const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const displayDateInChatView = (date) => {
  const dt = new Date(date);
  return `${months[dt.getMonth()]} ${dt.getDate()}, ${dt.getFullYear()}`;
};
