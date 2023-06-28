export const getDaysInMonth = (month, year) => {
  var date = new Date(year, month, 11);
  var days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date).getDate() + " mars");
    date.setDate(date.getDate() + 1);
  }
  return days;
};
