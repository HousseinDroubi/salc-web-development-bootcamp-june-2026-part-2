import { reset } from "../redux/features/cart/cart_slice";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";

const Cart = () => {
  const dispatch = useAppDispatch();
  const products_counter = useAppSelector(
    (state) => state.cart.produts_counter,
  );
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
