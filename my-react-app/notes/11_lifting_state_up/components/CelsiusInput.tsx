type celsiusInputProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

// 2. Child A updates the parent's state
const CelsiusInput = ({ value, setValue }: celsiusInputProps) => {
  return (
    <label>
      Celsius:{" "}
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </label>
  );
};

export default CelsiusInput;
