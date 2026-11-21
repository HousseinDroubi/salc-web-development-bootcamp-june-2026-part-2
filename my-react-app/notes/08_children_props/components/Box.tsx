type boxProps = {
  children: React.ReactNode;
};

const Box = ({ children }: boxProps) => {
  return <div style={{ border: "1px solid blue" }}>{children}</div>;
};

export default Box;
