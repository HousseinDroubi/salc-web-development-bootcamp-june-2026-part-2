import { useNavigate, useParams } from "react-router";

const Products = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h1>This is Settings page</h1>
      <h2>Showing data related to id: {id}</h2>
      <br />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go back to Home
      </button>
    </>
  );
};
export default Products;
