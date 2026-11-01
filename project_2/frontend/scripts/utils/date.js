function formatIsoDate(isoString, timeZone = "UTC") {
  const date = new Date(isoString);

  return date.toLocaleString("en-US", {
    timeZone: timeZone,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}
