import ThemeButton from "./ThemeButton";

// 2- Middle component doesn't need theme props
function Toolbar() {
  return (
    <div>
      <h2>Dashboard</h2>
      <ThemeButton />
    </div>
  );
}
export default Toolbar;
