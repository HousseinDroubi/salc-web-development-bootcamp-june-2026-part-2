import Box from "./components/Box";

function App() {
  return (
    // Now, the box is opening/closing tag, not self-closing
    // Because we want to pass JSX as props inside it
    <Box>
      <p>Username: Houssein</p>
      <p>Age: 29</p>
    </Box>
  );
}

export default App;
