const input_username = document.getElementById("input_username");
const input_password = document.getElementById("input_password");
const button_login = document.getElementById("button_login");
const result = document.getElementById("result");

button_login.addEventListener("click", async () => {
  const username = input_username.value;
  const password = input_password.value;
  const validation_result = validateLogin(username, password);

  if (validation_result != null) {
    result.classList.remove("color-green");
    result.classList.add("color-red");
    result.innerText = validation_result;
    return;
  }
  try {
    const url = `${AUTH_URL}/login`;
    const body = {
      username,
      password,
    };

    const response = await axios.post(url, body, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status == 200) {
      result.classList.remove("color-red");
      result.classList.remove("color-green");
      result.value = "";
      setUsernameCookie(response.data.username);
      input_username.value = "";
      input_password.value = "";
      location.href = "./todos.html";
      return;
    }
    result.classList.remove("color-red");
    result.classList.add("color-green");
    result.innerText = response.data.message;
  } catch (error) {
    result.classList.remove("color-green");
    result.classList.add("color-red");
    if (error.response?.status == 401) {
      result.innerText = error.response.data.message;
      return;
    }
    result.innerText = error.message;
  }
});
