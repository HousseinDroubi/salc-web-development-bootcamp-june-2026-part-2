const input_old_password = document.getElementById("input_old_password");
const input_new_password = document.getElementById("input_new_password");
const input_confirmation_password = document.getElementById(
  "input_confirmation_password",
);
const button_chagne_password = document.getElementById(
  "button_chagne_password",
);
const result = document.getElementById("result");

button_chagne_password.addEventListener("click", async () => {
  const old_password = input_old_password.value;
  const new_password = input_new_password.value;
  const confirmation_password = input_confirmation_password.value;
  const validation_result = validateChangePassword(
    old_password,
    new_password,
    confirmation_password,
  );

  if (validation_result != null) {
    result.classList.remove("color-green");
    result.classList.add("color-red");
    result.innerText = validation_result;
    return;
  }

  try {
    const url = `${AUTH_URL}/update_password`;
    const body = {
      old_password,
      new_password,
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
      input_old_password.value = "";
      input_new_password.value = "";
      input_confirmation_password.value = "";
    }
  } catch (error) {
    result.classList.remove("color-green");
    result.classList.add("color-red");
    const error_status_response = error.response?.status;
    if (
      error_status_response == 401 ||
      error_status_response == 404 ||
      error_status_response == 500
    ) {
      result.innerText = error.response.data.message;
      return;
    }
    result.innerText = error.message;
  }
});
