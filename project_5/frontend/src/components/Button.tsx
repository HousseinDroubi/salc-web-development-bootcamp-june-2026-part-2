import type { buttonProps } from "../types/components/button";

const Button = ({ title, onClick }: buttonProps) => {
  return (
    <button
      className="button"
      onClick={() => {
        onClick();
      }}
    >
      {title}
    </button>
  );
};

export default Button;
