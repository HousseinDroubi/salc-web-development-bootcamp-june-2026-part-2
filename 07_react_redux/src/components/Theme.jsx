import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../redux/features/theme/theme_slice";

const Theme = () => {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <button
      style={{
        width: "100px",
        height: "40px",
        borderRadius: "5px",
        backgroundColor: mode == "light" ? "white" : "#000050",
        color: mode == "light" ? "black" : "white",
        position: "fixed",
        right: "20px",
        top: "40px",
      }}
      onClick={() => {
        dispatch(toggle());
      }}
    >
      Toggle Theme
    </button>
  );
};

export default Theme;
