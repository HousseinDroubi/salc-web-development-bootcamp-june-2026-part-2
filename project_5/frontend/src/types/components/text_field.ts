type textFieldProps = {
  placeholder: string;
  value: string;
  default_value?: string;
  type?: "text" | "password";
  setText: React.Dispatch<React.SetStateAction<string>>;
};

export type { textFieldProps };
