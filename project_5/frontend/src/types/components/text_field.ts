type textFieldProps = {
  placeholder: string;
  value: string;
  default_value?: string;
  type?: "text" | "password";
  setText: React.Dispatch<React.SetStateAction<string>>;
  is_text_area?: boolean;
};

export type { textFieldProps };
