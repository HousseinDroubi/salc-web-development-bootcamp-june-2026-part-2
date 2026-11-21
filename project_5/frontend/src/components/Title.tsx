import type { titleProps } from "../types/components/title";

const Title = ({ title }: titleProps) => {
  return <h1 className="title">{title}</h1>;
};

export default Title;
