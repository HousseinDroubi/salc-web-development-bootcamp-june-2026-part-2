const input_todo_title = document.getElementById("input_todo_title");
const button_update_todo = document.getElementById("button_update_todo");
const result = document.getElementById("result");

const todo_id = Number(sessionStorage.getItem("last_todo_id"));

if (!todo_id) {
  location.href = "./todos.html";
}

const url = `${TODO_URL}/${todo_id}`;

axios
  .get(url, {
    withCredentials: true,
  })
  .then((response) => {
    if (response.status == 200) {
      input_todo_title.value = response.data.todo.title;
    }
  })
  .catch((error) => {
    result.classList.remove("color-green");
    result.classList.add("color-red");
    result.innerText = error.response?.data?.message;
    console.log(error);
  });

button_update_todo.addEventListener("click", async () => {
  const todo_title = input_todo_title.value;
  const validation_result = validateTodo(todo_title);

  if (validation_result != null) {
    result.classList.remove("color-green");
    result.classList.add("color-red");
    result.innerText = validation_result;
    return;
  }
  try {
    const url = `${TODO_URL}/${todo_id}`;
    const body = {
      title: todo_title,
    };
    const response = await axios.put(url, body, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    result.classList.remove("color-red");
    result.classList.add("color-green");
    result.innerText = "Todo Updated";
  } catch (error) {
    result.classList.remove("color-green");
    result.classList.add("color-red");
    const error_status_response = error.response?.status;
    if (
      error_status_response == 401 ||
      error_status_response == 403 ||
      error_status_response == 404 ||
      error_status_response == 500
    ) {
      result.innerText = error.response.data.message;
      return;
    }
    result.innerText = error.message;
  }
});
