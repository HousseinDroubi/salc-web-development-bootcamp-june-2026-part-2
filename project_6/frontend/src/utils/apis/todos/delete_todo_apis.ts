import axios from "axios";
import { TODO_URL } from "../../constants";
import type {
  deleteTodoRequestType,
  deleteTodoResponseType,
} from "../../../types/apis/todos/delete_todo";

const deleteTodoApi = async ({
  todo_id,
}: deleteTodoRequestType): Promise<deleteTodoResponseType> => {
  try {
    const url = `${TODO_URL}/${todo_id}`;
    await axios.delete(url, {
      withCredentials: true,
    });

    return {
      status: "success",
      text: "Todo updated",
    };
  } catch (error: any) {
    return {
      status: "error",
      text: error.message,
    };
  }
};

export { deleteTodoApi };
