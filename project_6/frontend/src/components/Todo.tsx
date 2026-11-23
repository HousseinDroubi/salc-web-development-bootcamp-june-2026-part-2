import { type todoProps } from "../types/components/todo";
const Todo = ({ title, added_at, viewTodo, deleteTodo }: todoProps) => {
  return (
    <section className="max-[860px]:w-full w-100 h-50 rounded-md border-2 border-solid border-blue flex flex-col justify-evenly items-center p-2">
      <h3 className="text-[18px] text-blue font-bold">{title}</h3>
      <p className="self-end text-[13px] text-[rgba(128,128,128,0.8)] font-bold">
        {added_at}
      </p>
      <section className="flex justify-evenly w-full">
        <button
          className="bg-blue text-white w-20 border-none cursor-pointer rounded-md h-8 transition-transform duration-50 ease-linear delay-0 hover:scale-105"
          onClick={viewTodo}
        >
          View
        </button>
        <button
          className="bg-red text-white w-20 border-none cursor-pointer rounded-md h-8 transition-transform duration-50 ease-linear delay-0 hover:scale-105"
          onClick={deleteTodo}
        >
          Delete
        </button>
      </section>
    </section>
  );
};

export default Todo;
