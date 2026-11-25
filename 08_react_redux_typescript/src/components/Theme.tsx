import { toggle } from "../redux/features/theme/theme_slice";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";

const Theme = () => {
  const mode = useAppSelector((state) => state.theme.mode);
  const dispatch = useAppDispatch();

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
