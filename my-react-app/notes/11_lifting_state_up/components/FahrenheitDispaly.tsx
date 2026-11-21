// 3. Child B reads the synced result from the parent
type fahrenheitDisplayProps = { value: string };
function FahrenheitDisplay({ value }: fahrenheitDisplayProps) {
  return <p>Fahrenheit: {value}°F</p>;
}

export default FahrenheitDisplay;
