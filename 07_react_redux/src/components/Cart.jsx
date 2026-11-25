import { useDispatch, useSelector } from "react-redux";
import { reset } from "../redux/features/cart/cart_slice";

const Cart = () => {
  const dispatch = useDispatch();
  const products_counter = useSelector((state) => state.cart.products_coutner);
  return (
    <div
      style={{ position: "fixed", right: "10px", top: "10px", display: "flex" }}
    >
      <p>Products in Cart: {products_counter}</p>
      <button
        style={{ marginLeft: "10px" }}
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Cart;
