import { useState } from "react";
import Cart from "../components/Cart";
import Theme from "../components/Theme";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { increment } from "../redux/features/cart/cart_slice";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode);
  return (
    <div
      style={{
        backgroundColor: mode == "light" ? "white" : "#000050",
        color: mode == "light" ? "black" : "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          border: `1px solid ${mode == "light" ? "black" : "white"}`,
          width: "300px",
          height: "400px",
          marginBottom: "20px",
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Product: PC</h2>
        <h3>Price: 300$</h3>
      </div>
      <div>
        <label htmlFor="input_quantity" style={{ marginRight: "10px" }}>
          Quantity
        </label>
        <input
          id="input_quantity"
          defaultValue={quantity}
          type="number"
          onChange={(e) => {
            setQuantity(Number(e.target.value));
          }}
        />
      </div>
      <button
        style={{ marginTop: "20px" }}
        onClick={() => {
          dispatch(increment(quantity));
        }}
      >
        Add to cart
      </button>
      <Theme />
      <Cart />
    </div>
  );
};

export default Product;
