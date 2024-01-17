import dayjs from "dayjs";

function isTodayInRange(fromDate, toDate) {
  const format = "DD MMM h:mm a";

  const currentYear = dayjs().year(); // Get the current year
  const today = dayjs();

  const parseDate = (dateString) => {
    const parsedDate = dayjs(`${currentYear} ${dateString}`, {
      format: `YYYY ${format}`,
    });
    return parsedDate.isValid() ? parsedDate : null;
  };

  const fromDateObj = parseDate(fromDate);
  const toDateObj = parseDate(toDate);

  return (
    fromDateObj &&
    toDateObj &&
    (today.isAfter(fromDateObj) || today.isSame(fromDateObj)) &&
    (today.isBefore(toDateObj) || today.isSame(toDateObj))
  );
}

export default isTodayInRange;
