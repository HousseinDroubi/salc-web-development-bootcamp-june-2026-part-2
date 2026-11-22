import { Outlet } from "react-router";
import Header from "./Header";

const TodoAppNav = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default TodoAppNav;
