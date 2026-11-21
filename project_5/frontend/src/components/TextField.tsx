import type { textFieldProps } from "../types/components/text_field";

const TextField = ({
  value,
  default_value,
  placeholder,
  setText,
  type = "text",
}: textFieldProps) => {
  return (
    <input
      type={type}
      className="input"
      placeholder={placeholder}
      value={value}
      defaultValue={default_value}
      onChange={(e) => {
        setText(e.target.value);
      }}
    />
  );
};

export default TextField;
