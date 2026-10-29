const setUsernameCookie = (username) => {
  const d = new Date();
  d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000); // 1 day in milliseconds
  document.cookie = `username=${encodeURIComponent(username)}; expires=${d.toUTCString}; path=/; SameSite=Lax`;
};

const getUsernameFromCookie = () => {
  const cookies = decodeURIComponent(document.cookie);
  const array = cookies.split("; ");
  const index = array.findIndex(
    (element) => element.split("=")[0] === "username",
  );
  let value;
  if (!((array.length == 1 && array[0] == "") || index == -1))
    value = array[index].split("=")[1];
  else value = "";
  return value;
};
