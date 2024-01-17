import dayjs from "dayjs";

function isTodayInRange(fromDate, toDate, today) {
  const format = "DD MMM h:mm a";

  const currentYear = dayjs().year(); // Get the current year

  const parseDate = (dateString) => {
    const parsedDate = dayjs(`${currentYear} ${dateString}`, {
      format: `YYYY ${format}`,
    });
    return parsedDate.isValid() ? parsedDate : null;
  };

  const defaultToday = today ? parseDate(today) : dayjs();
  const fromDateObj = parseDate(fromDate);
  const toDateObj = parseDate(toDate);

  return (
    fromDateObj &&
    toDateObj &&
    (defaultToday.isAfter(fromDateObj) || defaultToday.isSame(fromDateObj)) &&
    (defaultToday.isBefore(toDateObj) || defaultToday.isSame(toDateObj))
  );
}

export default isTodayInRange;
