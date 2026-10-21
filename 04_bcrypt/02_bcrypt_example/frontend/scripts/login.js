const button_login = document.getElementById("button_login");

const server_url = "http://127.0.0.1:4000";

button_login.addEventListener("click", async () => {
  const username = document.getElementById("input_username").value;
  const password = document.getElementById("input_password").value;
  const body = {
    username,
    password,
  };

  try {
    const response = await axios.post(`${server_url}/login`, body, {
      withCredentials: true,
    });
    console.log(response.status);
    if (response.status === 200) {
      window.location.href = "./products.html";
    }
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
});
