const deleteTodo = async (
  todo_id,
  todos_container,
  empty_todos_container,
  todos_result,
) => {
  const url = `${TODO_URL}/${todo_id}`;
  try {
    const response = await axios.delete(url, {
      withCredentials: true,
    });
    if (response.status == 204) {
      const todo_to_be_deleted = document.getElementById(`todo_${todo_id}`);
      todos_container.removeChild(todo_to_be_deleted);

      if (todos_container.children.length == 0) {
        todos_container.classList.add("d-none");
        todos_result.innerText = "No Todos yet";
        empty_todos_container.classList.remove("d-none");
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

const viewTodo = async (todo_id) => {
  location.href = "./update_todo.html";
  sessionStorage.setItem("last_todo_id", todo_id);
};

const addTodoToDom = (todo, todos_container, empty_todos_container) => {
  const button_view = document.createElement("button");
  button_view.innerText = "View";
  button_view.addEventListener("click", async () => {
    await viewTodo(todo.id);
  });
  const button_delete = document.createElement("button");
  button_delete.innerText = "Delete";

  button_delete.addEventListener("click", async () => {
    await deleteTodo(
      todo.id,
      todos_container,
      empty_todos_container,
      todos_result,
    );
  });

  const buttons_section_container = document.createElement("section");
  buttons_section_container.classList.add("flex", "j-c-s-e");

  buttons_section_container.appendChild(button_view);
  buttons_section_container.appendChild(button_delete);

  const paragraph_date = document.createElement("p");
  paragraph_date.classList.add("a-s-e");
  paragraph_date.innerText = formatIsoDate(todo.added_at);

  const todo_title = document.createElement("h3");
  todo_title.classList.add("color-blue");
  todo_title.innerText = todo.title;

  const todo_container = document.createElement("section");
  todo_container.id = `todo_${todo.id}`;
  todo_container.classList.add(
    "todo-container",
    "flex",
    "f-d-c",
    "j-c-s-e",
    "a-i-c",
  );
  todo_container.appendChild(todo_title);
  todo_container.appendChild(paragraph_date);
  todo_container.appendChild(buttons_section_container);
  return todo_container;
};
