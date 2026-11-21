import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>This is About page</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home Page
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
export default About;
