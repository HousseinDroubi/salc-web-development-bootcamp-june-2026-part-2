import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import About from "./pages/About";
import NavComponent from "./components/NavComponent";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavComponent />}>
          {/* index marks a default child route—it tells React Router which component to render inside the parent route's <Outlet/> when the URL matches the parent's exact path */}
          <Route index element={<Home />} />{" "}
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
