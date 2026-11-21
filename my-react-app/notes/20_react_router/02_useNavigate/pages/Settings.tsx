import { useNavigate } from "react-router";

const Settings = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>This is Settings page</h1>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Go to About Page
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home Page
      </button>
    </>
  );
};
export default Settings;
