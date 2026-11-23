import type { titleProps } from "../types/components/title";

const Title = ({ title }: titleProps) => {
  return <h1 className="text-blue font-bold text-3xl">{title}</h1>;
};

export default Title;
