import type { buttonProps } from "../types/components/button";

const Button = ({ title, onClick }: buttonProps) => {
  return (
    <button
      // className="button"
      className="text-[18px] bg-blue border-none rounded-md text-white font-bold w-45 h-8.75 cursor-pointer transition-transform duration-50 ease-linear hover:scale-108 max-[465px]:w-32.5"
      onClick={() => {
        onClick();
      }}
    >
      {title}
    </button>
  );
};

export default Button;
