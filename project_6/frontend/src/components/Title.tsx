import type { titleProps } from "../types/components/title";

const Title = ({ title }: titleProps) => {
  return <h1 className="color-blue font-black text-3xl">{title}</h1>;
};

export default Title;
