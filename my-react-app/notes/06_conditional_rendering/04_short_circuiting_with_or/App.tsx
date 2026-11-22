const App = () => {
  // You can change the condition and see the result
  const condition = false;

  // If condition is false, <p> tag will be rendered
  return <>{condition || <p>Render this component if condition is false</p>}</>;
};

export default App;
