import axios from "axios";
import { TODO_URL } from "../../constants";
import type {
  addTodoRequestType,
  addTodoResponseType,
} from "../../../types/apis/todos/add_todo";

const addTodoApi = async ({
  title,
}: addTodoRequestType): Promise<addTodoResponseType> => {
  try {
    const url = `${TODO_URL}/`;
    const body = {
      title,
    };

    const response = await axios.post(url, body, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return {
      status: "success",
      text: "Todo Added",
      todo: response.data.todo,
    };
  } catch (error: any) {
    if (error.response?.status == 401 || error.response?.status == 400) {
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

export { addTodoApi };
