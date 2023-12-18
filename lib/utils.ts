export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 5,
});

export const convertDate = (date: Date): string => {
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long", // Specify the full name of the month (e.g., "June")
    day: "numeric", // Specify the day of the month (e.g., "24")
    year: "numeric", // Specify the year (e.g., "2020")
  });
  return formattedDate;
};
