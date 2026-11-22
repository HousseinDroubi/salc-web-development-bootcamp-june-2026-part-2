import axios from "axios";
import { TODO_URL } from "../../constants";
import type {
  updateTodoRequestType,
  updateTodoResponseType,
} from "../../../types/apis/todos/update_todo";
import type { getTodoRequestType } from "../../../types/apis/todos/get_todo";

const getTodoApi = async ({ todo_id }: getTodoRequestType): Promise<void> => {
  const url = `${TODO_URL}/${todo_id}`;

  return axios.get(url, {
    withCredentials: true,
  });
};

const updateTodoApi = async ({
  todo_id,
  title,
}: updateTodoRequestType): Promise<updateTodoResponseType> => {
  try {
    const url = `${TODO_URL}/${todo_id}`;
    const body = {
      title,
    };

    await axios.put(url, body, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return {
      status: "success",
      text: "Todo updated",
    };
  } catch (error: any) {
    const error_status_response = error.response?.status;
    if (
      error_status_response == 401 ||
      error_status_response == 403 ||
      error_status_response == 404 ||
      error_status_response == 500
    ) {
      return {
        status: "error",
        text: error.response.data.message,
      };
    }

    return {
      status: "error",
      text: error.message,
    };
  }
};

export { getTodoApi, updateTodoApi };
