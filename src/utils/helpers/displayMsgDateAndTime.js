export function displayMsgDateAndTime(date) {
  const dt = new Date(date);

  const time = `${dt.getHours() % 12}:${
    dt.getMinutes() < 10 ? "0" : ""
  }${dt.getMinutes()} ${dt.getHours() >= 12 ? "PM" : "AM"}`;
  return `${dt.getDate()}/${dt.getMonth() + 1}/${dt
    .getFullYear()
    .toString()
    .substr(-2)}, ${time}`;
}
