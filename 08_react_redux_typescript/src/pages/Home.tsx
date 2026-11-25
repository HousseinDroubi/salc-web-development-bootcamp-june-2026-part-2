import { useNavigate } from "react-router";
import Theme from "../components/Theme";
import { useAppSelector } from "../redux/store/hooks";

const Home = () => {
  const mode = useAppSelector((state) => state.theme.mode);
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        backgroundColor: mode == "light" ? "white" : "#000050",
      }}
    >
      <button
        onClick={() => {
          navigate("/product");
        }}
      >
        Product Page
      </button>
      <button
        onClick={() => {
          navigate("/user");
        }}
      >
        User Page
      </button>
      <Theme />
    </div>
  );
};

export default Home;
