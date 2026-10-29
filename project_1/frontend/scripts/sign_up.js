const input_username = document.getElementById("input_username");
const input_password = document.getElementById("input_password");
const input_repassword = document.getElementById("input_repassword");
const button_sign_up = document.getElementById("button_sign_up");
const result = document.getElementById("result");

button_sign_up.addEventListener("click", async () => {
  const username = input_username.value;
  const password = input_password.value;
  const repassword = input_repassword.value;
  const validation_result = validateSignUp(username, password, repassword);

  if (validation_result != null) {
    result.classList.remove("color-green");
    result.classList.add("color-red");
    result.innerText = validation_result;
    return;
  }
  try {
    const url = `${AUTH_URL}/create_account`;
    const body = {
      username,
      password,
    };

    const response = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    result.classList.remove("color-red");
    result.classList.add("color-green");
    result.innerText = response.data.message;
    input_username.value = "";
    input_password.value = "";
    input_repassword.value = "";
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
