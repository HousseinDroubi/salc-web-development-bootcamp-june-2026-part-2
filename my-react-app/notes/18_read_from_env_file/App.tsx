const App = () => {
  const url = import.meta.env.VITE_APP_APP_URL;
  return (
    <>
      <p>Url: {url}</p>
    </>
  );
};

export default App;
