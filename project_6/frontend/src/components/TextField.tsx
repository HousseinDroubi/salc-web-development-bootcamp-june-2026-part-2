import type { textFieldProps } from "../types/components/text_field";

const TextField = ({
  value,
  default_value,
  placeholder,
  setText,
  type = "text",
  is_text_area = false,
}: textFieldProps) => {
  if (is_text_area) {
    return (
      <textarea
        className="rounded-md border-solid border border-blue p-1.75"
        value={value}
        defaultValue={default_value}
        placeholder={placeholder}
        onChange={(e) => setText(e.target.value)}
      />
    );
  }

  return (
    <input
      type={type}
      className="rounded-md border-solid border border-blue p-1.75 h-10 w-[70%]"
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
