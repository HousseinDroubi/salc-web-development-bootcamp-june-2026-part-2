import { useEffect, useState } from "react";
import Box from "../../components/Box";
import Button from "../../components/Button";
import Message from "../../components/Message";
import TextField from "../../components/TextField";
import Title from "../../components/Title";
import type { messageProps } from "../../types/components/message";
import type { todoBodyDto } from "../../validations/requests/todo/validate_todo_body";
import todoBodyValidator from "../../validations/requests/todo/validate_todo_body";
import type { addTodoResponseType } from "../../types/apis/todos/add_todo";
import { addTodoApi } from "../../utils/apis/todos/add_todo_apis";
import { useAppDispatch } from "../../redux/store/hooks";
import { updateCurrentPage } from "../../redux/features/current_page/current_page_slice";
import { addTodoToState } from "../../redux/features/todos/todos_slice";
import { formatIsoDate } from "../../utils/date";

const AddTodo = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateCurrentPage("add_todo"));
  }, []);

  const [todoTitle, setTodoTitle] = useState<string>("");
  const [message, setMessage] = useState<messageProps>({
    status: null,
    text: "",
  });

  const addTodo = async () => {
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
    const result: addTodoResponseType = await addTodoApi({
      title: todoTitle,
    });
    if (result.status == "success") {
      setMessage({
        status: "success",
        text: result.text ?? "Done",
      });
      setTodoTitle("");
      console.log(result);
      dispatch(
        addTodoToState({
          id: result.todo?.id!,
          title: result.todo?.title!,
          added_at: formatIsoDate(result.todo?.added_at!),
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
        <Title title="Add Todo" />
        <Box height="320px">
          <TextField
            placeholder="Enter Title"
            value={todoTitle}
            setText={setTodoTitle}
            is_text_area
          />
          <Button title="Add Todo" onClick={addTodo} />
          <Message status={message.status} text={message.text} />
        </Box>
      </main>
    </article>
  );
};
export default AddTodo;
