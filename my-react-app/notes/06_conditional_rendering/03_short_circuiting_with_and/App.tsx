const App = () => {
  // You can change the condition and see the result
  const condition = true;

  // If condition is true, <p> tag will be rendered
  return <>{condition && <p>Render this component if condition is true</p>}</>;
};

export default App;
