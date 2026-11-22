import "./Todo.css";
import { type todoProps } from "../../types/components/todo";
const Todo = ({ title, added_at, viewTodo, deleteTodo }: todoProps) => {
  return (
    <section className="todo-container flex f-d-c j-c-s-e a-i-c">
      <h3 className="color-blue">{title}</h3>
      <p className="a-s-e">{added_at}</p>
      <section className="flex j-c-s-e">
        <button onClick={viewTodo}>View</button>
        <button onClick={deleteTodo}>Delete</button>
      </section>
    </section>
  );
};

export default Todo;
