import type { boxProps } from "../types/components/box";

const Box = ({ height = "300px", children }: boxProps) => {
  return (
    <section
      className={`flex f-d-c a-i-c j-c-s-e box mt-20`}
      style={{ height: height }}
    >
      {children}
    </section>
  );
};

export default Box;
