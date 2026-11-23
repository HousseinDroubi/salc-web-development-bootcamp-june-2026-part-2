import AllTodos from "../assets/icons/all-todos.svg";
import AddTodo from "../assets/icons/add-todo.svg";
import Password from "../assets/icons/password.svg";
import Profile from "../assets/icons/profile.svg";
import { Link } from "react-router";
import type { currentPageType } from "../types/redux/current_page";
import { useAppSelector } from "../redux/store/hooks";

const Header = () => {
  const current_page: currentPageType = useAppSelector(
    (state) => state.currentPage.current_page,
  );
  return (
    <header className="flex items-center justify-between fixed top-0 left-0 right-0 h-20 pt-0 pb-0 pr-7.5 pl-7.5 bg-blue">
      <section>
        <h2 className="text-2xl font-bold text-white">Todo</h2>
      </section>
      <section>
        <nav>
          <ol className="flex gap-x-7.5">
            <li
              className={`max-[860px]:w-8 ${
                current_page == "todos"
                  ? "border-b border-white pb-2 border-solid"
                  : ""
              }`}
            >
              <Link to="/todos">
                <img src={AllTodos} alt="all todos" width="40" height="40" />
              </Link>
            </li>
            <li
              className={`max-[860px]:w-8 ${
                current_page == "add_todo"
                  ? "border-b border-white pb-2 border-solid"
                  : ""
              }`}
            >
              <Link to="/add_todo">
                <img src={AddTodo} alt="add todos" width="40" height="40" />
              </Link>
            </li>
            <li
              className={`max-[860px]:w-8 ${
                current_page == "update_password"
                  ? "border-b border-white pb-2 border-solid"
                  : ""
              }`}
            >
              <Link to="/update_password">
                <img
                  src={Password}
                  alt="update password"
                  width="40"
                  height="40"
                />
              </Link>
            </li>
            <li
              className={`max-[860px]:w-8 ${
                current_page == "update_profile"
                  ? "border-b border-white pb-2 border-solid"
                  : ""
              }`}
            >
              <Link to="/update_profile">
                <img
                  src={Profile}
                  alt="update profile"
                  width="40"
                  height="40"
                />
              </Link>
            </li>
          </ol>
        </nav>
      </section>
    </header>
  );
};

export default Header;
