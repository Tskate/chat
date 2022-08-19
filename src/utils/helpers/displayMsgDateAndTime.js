export function displayMsgDateAndTime(date) {
  const time = `${date.getHours() % 12}:${
    date.getMinutes() < 10 ? "0" : ""
  }${date.getMinutes()} ${date.getHours() >= 12 ? "PM" : "AM"}`;
  return `${date.getDate()}/${date.getMonth() + 1}/${date
    .getFullYear()
    .toString()
    .substr(-2)}, ${time}`;
}
