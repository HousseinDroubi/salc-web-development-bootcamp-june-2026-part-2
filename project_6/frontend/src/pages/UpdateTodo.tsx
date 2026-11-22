import { useEffect, useState } from "react";
import Box from "../components/Box";
import Button from "../components/Button";
import Message from "../components/Message";
import TextField from "../components/TextField";
import Title from "../components/Title";
import type { messageProps } from "../types/components/message";
import type { todoBodyDto } from "../validations/requests/todo/validate_todo_body";
import todoBodyValidator from "../validations/requests/todo/validate_todo_body";
import type { addTodoResponseType } from "../types/apis/todos/add_todo";
import { useNavigate, useParams } from "react-router";
import {
  getTodoApi,
  updateTodoApi,
} from "../utils/apis/todos/update_todo_apis";
import { useAppDispatch } from "../redux/store/hooks";
import { updateTodoInState } from "../redux/features/todos/todos_slice";
import { updateCurrentPage } from "../redux/features/current_page/current_page_slice";

const UpdateTodo = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  if (!id) {
    navigate("/todos");
  }

  const [todoTitle, setTodoTitle] = useState<string>("");
  const [message, setMessage] = useState<messageProps>({
    status: null,
    text: "",
  });

  useEffect(() => {
    dispatch(updateCurrentPage(null));
    getTodoApi({ todo_id: id! })
      .then((response: any) => {
        console.log(response);
        setTodoTitle(response.data.todo.title);
      })
      .catch(() => {
        setMessage({
          status: "error",
          text: "Error while fetching Todo",
        });
      });
  }, []);

  const updateTodo = async () => {
    const data: todoBodyDto = {
      title: todoTitle,
    };
    const validation = todoBodyValidator.safeParse(data);
    if (validation.error) {
      setMessage({
        status: "error",
        text: validation.error?.issues[0].message || "Something went wrong",
      });
      return;
    }
    const result: addTodoResponseType = await updateTodoApi({
      todo_id: id!,
      title: todoTitle,
    });
    if (result.status == "success") {
      setMessage({
        status: "success",
        text: result.text ?? "Done",
      });
      dispatch(
        updateTodoInState({
          id: id!,
          title: todoTitle,
        }),
      );
      return;
    }
    setMessage({
      status: result.status,
      text: result.text || "Something went wrong",
    });
  };

  return (
    <article className="flex f-d-c j-c-c a-i-c m-h-100vh">
      <main className="flex f-d-c j-c-c a-i-c">
        <Title title="Update Todo" />
        <Box height="320px">
          <TextField
            placeholder="Enter Title"
            value={todoTitle}
            default_value={todoTitle}
            setText={setTodoTitle}
            is_text_area
          />
          <Button title="Update Todo" onClick={updateTodo} />
          <Message status={message.status} text={message.text} />
        </Box>
      </main>
    </article>
  );
};
export default UpdateTodo;
