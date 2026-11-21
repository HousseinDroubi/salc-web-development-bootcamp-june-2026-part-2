import { useEffect, useState } from "react";

const App = () => {
  const [file, setFile] = useState<File | null>(null);
  useEffect(() => {
    if (file) {
      console.log(file.size);
      console.log(file.name);
    }
  }, [file]);
  return (
    <>
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
          }
        }}
      />
    </>
  );
};

export default App;
