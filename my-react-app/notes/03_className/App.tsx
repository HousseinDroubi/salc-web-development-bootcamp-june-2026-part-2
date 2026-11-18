import "./App.css"; // must be imported like this

const App = () => {
  const name = "Houssein Droubi";
  return (
    <>
      {/* Reading the color-red from App.css */}
      <p className="color-red">My name is {name}</p>
    </>
  );
};

export default App;
