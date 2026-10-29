const input_todo_title = document.getElementById("input_todo_title");
const button_add_todo = document.getElementById("button_add_todo");
const result = document.getElementById("result");

button_add_todo.addEventListener("click", async () => {
  const todo_title = input_todo_title.value;
  const validation_result = validateTodo(todo_title);

  if (validation_result != null) {
    result.classList.remove("color-green");
    result.classList.add("color-red");
    result.innerText = validation_result;
    return;
  }

  try {
    const url = `${TODO_URL}/`;
    const body = {
      title: todo_title,
    };

    const response = await axios.post(url, body, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });

    result.classList.remove("color-red");
    result.classList.add("color-green");
    result.innerText = response.data.message;
    if (response.status == 201) {
      input_todo_title.value = "";
      return;
    }
  } catch (error) {
    result.classList.remove("color-green");
    result.classList.add("color-red");
    if (error.response?.status == 401 || error.response?.status == 400) {
      result.innerText = error.response.data.message;
      return;
    }
    result.innerText = error.message;
  }
});
