import type { boxProps } from "../types/components/box";

const Box = ({ height = "300px", children }: boxProps) => {
  return (
    <section
      className="flex flex-col items-center justify-evenly mt-6 w-100 p-3.75 rounded-md border border-solid border-blue max-[465px]:w-75"
      style={{ height: height }}
    >
      {children}
    </section>
  );
};

export default Box;
