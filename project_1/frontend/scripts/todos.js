const empty_todos_container = document.getElementById("empty_todos_container");
const todos_container = document.getElementById("todos_container");
const todos_result = document.getElementById("todos_result");

todos_container.classList.remove("flex");
todos_container.classList.add("d-none");
todos_result.innerText = "Loading Todos...";

const url = `${TODO_URL}/`;

axios
  .get(url, {
    withCredentials: true,
  })
  .then((resonse) => {
    todos_result.classList.remove("color-red");
    todos_result.classList.add("color-blue");
    const todos = resonse.data.todos;
    if (todos.length == 0) {
      todos_result.innerText = "No Todos yet";
      return;
    }
    empty_todos_container.classList.add("d-none");

    todos_container.classList.remove("d-none");
    todos_container.classList.add("flex");
    for (const todo of todos) {
      const todo_container = addTodoToDom(
        todo,
        todos_container,
        empty_todos_container,
        todos_result,
      );
      todos_container.append(todo_container);
    }
  })
  .catch((error) => {
    todos_result.classList.remove("color-blue");
    todos_result.classList.add("color-red");
    todos_result.innerText = error.message;
  });
