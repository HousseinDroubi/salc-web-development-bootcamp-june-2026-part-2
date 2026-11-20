const App = () => {
  // You can change the condition and see the result
  const condition = true;

  if (condition) {
    return <p>Render this component if condition is true</p>;
  }

  return <p>Render this component if condition is false</p>;
};

export default App;
