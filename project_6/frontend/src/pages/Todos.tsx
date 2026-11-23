import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { updateCurrentPage } from "../redux/features/current_page/current_page_slice";
import {
  deleteTodoFromState,
  getTodos,
} from "../redux/features/todos/todos_slice";
import Todo from "../components/Todo";
import type { todo } from "../types/redux/todos";
import { useNavigate } from "react-router";
import { deleteTodoApi } from "../utils/apis/todos/delete_todo_apis";

const Todos = () => {
  const navigate = useNavigate();
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateCurrentPage("todos"));
    if (todos.todos.length == 0) dispatch(getTodos());
  }, []);

  const viewTodo = (id: string) => {
    navigate(`/update_todo/${id}`);
  };

  const deleteTodo = async (id: string) => {
    const result = await deleteTodoApi({ todo_id: id });
    if (result.status == "success") {
      dispatch(deleteTodoFromState(id));
    }
  };

  if (todos.loading) {
    return (
      <article className="flex justify-center items-center min-h-screen">
        <h1 className="color-blue font-bold text-3xl">Loding Todos...</h1>
      </article>
    );
  }

  if (todos.error) {
    return (
      <>
        <article className="flex flex-col justify-center items-center min-h-screen">
          <h1 className="color-red font-bold text-3xl">
            Error while loding Todos
          </h1>
          <h2 className="color-red font-bold text-2xl">{todos.error}</h2>
        </article>
      </>
    );
  }

  if (todos.todos.length == 0) {
    return (
      <article className="flex justify-center items-center min-h-screen">
        <h1 className="color-blue text-3xl font-bold">No Todos Yet...</h1>
      </article>
    );
  }

  return (
    <article className="flex-wrap flex gap-2.5 mt-27.5 p-5 max-[860px]:w-full max-[860px]:flex-col max-[860px]:flex-nowrap">
      {todos.todos.map((todo: todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          added_at={todo.added_at}
          viewTodo={() => {
            viewTodo(todo.id);
          }}
          deleteTodo={() => {
            deleteTodo(todo.id);
          }}
        />
      ))}
    </article>
  );
};

export default Todos;
