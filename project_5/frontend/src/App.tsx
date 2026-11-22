import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Todos from "./pages/Todos/Todos";
import AddTodo from "./pages/AddTodo/AddTodo";
import UpdatePassword from "./pages/UpdatePassword";
import TodoAppNav from "./components/TodoAppNav";
import PageNotFound from "./pages/PageNotFound";
import UpdateProfile from "./pages/UpdateProfile";
import UpdateTodo from "./pages/UpdateTodo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route element={<TodoAppNav />}>
          <Route path="/todos" element={<Todos />} />
          <Route path="/add_todo" element={<AddTodo />} />
          <Route path="/update_todo/:id" element={<UpdateTodo />} />
          <Route path="/update_password" element={<UpdatePassword />} />
          <Route path="/update_profile" element={<UpdateProfile />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
