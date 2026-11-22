import AllTodos from "../../assets/icons/all-todos.svg";
import AddTodo from "../../assets/icons/add-todo.svg";
import Password from "../../assets/icons/password.svg";
import Profile from "../../assets/icons/profile.svg";
import { Link } from "react-router";
import type { currentPageType } from "../../types/redux/current_page";
import { useAppSelector } from "../../redux/store/hooks";

const Header = () => {
  const current_page: currentPageType = useAppSelector(
    (state) => state.currentPage.current_page,
  );
  return (
    <header className="flex a-i-c j-c-s-b">
      <section>
        <h2>Todo</h2>
      </section>
      <section>
        <nav>
          <ol className="flex">
            <li>
              <Link
                to="/todos"
                className={current_page == "todos" ? "page-icon-border" : ""}
              >
                <img src={AllTodos} alt="all todos" width="40" height="40" />
              </Link>
            </li>
            <li>
              <Link
                to="/add_todo"
                className={current_page == "add_todo" ? "page-icon-border" : ""}
              >
                <img src={AddTodo} alt="add todos" width="40" height="40" />
              </Link>
            </li>
            <li>
              <Link
                to="/update_password"
                className={
                  current_page == "update_password" ? "page-icon-border" : ""
                }
              >
                <img
                  src={Password}
                  alt="update password"
                  width="40"
                  height="40"
                />
              </Link>
            </li>
            <li>
              <Link
                to="update_profile"
                className={
                  current_page == "update_profile" ? "page-icon-border" : ""
                }
              >
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
