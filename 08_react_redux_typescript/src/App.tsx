import { BrowserRouter, Route, Routes } from "react-router";
import Product from "./pages/Product";
import User from "./pages/User";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
