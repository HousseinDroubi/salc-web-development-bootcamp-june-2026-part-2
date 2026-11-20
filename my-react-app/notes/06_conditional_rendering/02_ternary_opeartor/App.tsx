const App = () => {
  // You can change the condition and see the result
  const condition = true;

  return (
    <>
      {condition ? (
        <p>Render this component if condition is true</p>
      ) : (
        <p>Render this component if condition is false</p>
      )}
    </>
  );
};

export default App;
