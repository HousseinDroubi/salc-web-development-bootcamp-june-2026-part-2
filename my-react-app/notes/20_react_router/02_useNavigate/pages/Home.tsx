import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>This is Home page</h1>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Go to About Page
      </button>
      <button
        onClick={() => {
          navigate("/settings");
        }}
      >
        Go to Settings Page
      </button>
    </>
  );
};
export default Home;
