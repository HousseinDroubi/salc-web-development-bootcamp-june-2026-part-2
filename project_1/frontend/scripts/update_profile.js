const input_username = document.getElementById("input_username");
const button_update_profile = document.getElementById("button_update_profile");
const result = document.getElementById("result");

input_username.value = getUsernameFromCookie();

button_update_profile.addEventListener("click", async () => {
  const username = input_username.value;
  const validation_result = validateUpdateProfile(username);

  if (validation_result != null) {
    result.classList.remove("color-green");
    result.classList.add("color-red");
    result.innerText = validation_result;
    return;
  }

  try {
    const url = `${AUTH_URL}/update_profile`;
    const body = {
      username,
    };

    const response = await axios.put(url, body, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    result.classList.remove("color-red");
    result.classList.add("color-green");
    result.innerText = response.data.message;
    if (response.status == 200) {
      setUsernameCookie(response.data.new_username);
      input_username.value = response.data.new_username;
    }
  } catch (error) {
    result.classList.remove("color-green");
    result.classList.add("color-red");
    if (error.response?.status == 403) {
      result.innerText = error.response.data.message;
      return;
    }
    result.innerText = error.message;
  }
});
