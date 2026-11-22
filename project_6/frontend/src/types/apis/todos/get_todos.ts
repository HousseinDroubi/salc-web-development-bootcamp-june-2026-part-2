import axios from "axios";
import { TODO_URL } from "../../../utils/constants";
import type { todo } from "../../redux/todos";
import { formatIsoDate } from "../../../utils/date";

const getTodosApi = () => {
  const url = `${TODO_URL}/`;

  return axios
    .get(url, {
      withCredentials: true,
    })
    .then((response) =>
      response.data.todos.map((todo: todo) => {
        return { ...todo, added_at: formatIsoDate(todo.added_at) };
      }),
    );
};

export { getTodosApi };
