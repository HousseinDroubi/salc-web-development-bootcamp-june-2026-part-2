import { Outlet } from "react-router";
import Header from "./Header/Header";

const TodoAppNav = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default TodoAppNav;
