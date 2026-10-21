const button_get_products = document.getElementById("button_get_products");

const server_url = "http://127.0.0.1:4000";

button_get_products.addEventListener("click", async () => {
  try {
    const response = await axios.get(`${server_url}/products`, {
      withCredentials: true,
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
});
