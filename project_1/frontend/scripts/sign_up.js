const input_username = document.getElementById("input_username");
const input_password = document.getElementById("input_password");
const input_repassword = document.getElementById("input_repassword");
const button_login = document.getElementById("button_login");
const result = document.getElementById("result");

button_login.addEventListener("click", () => {
  const username = input_username.value;
  const password = input_password.value;
  const repassword = input_repassword.value;
  const validation_result = validateSignUp(username, password, repassword);

  if (validation_result != null) {
    result.classList.remove("color-green");
    result.classList.add("color-red");
    result.innerText = validation_result;
  } else {
    // Sending API
    result.classList.remove("color-red");
    result.classList.add("color-green");
    result.innerText = "Account created";
  }
});
