import type { messageProps } from "../types/components/message";

const Message = ({ status, text }: messageProps) => {
  if (!status) return <></>;
  if (status == "error") return <h4 className={`mt-5 text-red`}>{text}</h4>;

  return <h4 className={`mt-5 text-green`}>{text}</h4>;
};

export default Message;
