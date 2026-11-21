import { useState } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const [id, setId] = useState<string>("1");
  return (
    <>
      <label htmlFor="input_product_id">Change Product Id: </label>
      <input
        type="number"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          navigate(`/products/${id}`);
        }}
      >
        View product {id}
      </button>
    </>
  );
};
export default Home;
