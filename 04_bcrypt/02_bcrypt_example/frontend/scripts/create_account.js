const button_create_account = document.getElementById("button_create_account");

const server_url = "http://127.0.0.1:4000";

button_create_account.addEventListener("click", async () => {
  const username = document.getElementById("input_username").value;
  const password = document.getElementById("input_password").value;
  const body = {
    username,
    password,
  };

  try {
    const response = await axios.post(`${server_url}/create_account`, body);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
});
