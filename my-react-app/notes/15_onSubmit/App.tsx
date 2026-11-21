import { useEffect, useState } from "react";

const App = () => {
  // file chosen by the user
  // setFile sets the file when user choose an image in <input/> tag using onChange inside it
  const [file, setFile] = useState<File | null>(null);
  // previewUrl is a string representing the url of file chosen by the user
  // setPreviewUrl sets the previewUrl when user choose a file
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  // status is only meta data on file chosen by user
  // setStatus sets the status when use click on upload and they have chosen an image
  const [status, setStatus] = useState<string>("");

  // The following useEffect will listen when file changes, if it's not null it will setPreview to the url of file
  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [file]);

  // The following function is done by the form when you click on the button that should be of type submit
  const handleFile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents full page reload on submit

    if (!file) {
      setStatus("Please choose a file first.");
      return;
    }

    // Example: build FormData for an API upload (e.g. fetch("/api/upload", { method: "POST", body: formData }))
    const formData = new FormData();
    formData.append("file", file);

    setStatus(
      `Ready to upload: ${file.name} (${Math.round(file.size / 1024)} KB)`,
    );
  };

  return (
    <form onSubmit={handleFile}>
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files?.[0] ?? null);
          setStatus("");
        }}
      />

      {/* The following will show a preview of file url if only it's image */}
      {previewUrl && file?.type.startsWith("image/") && (
        <div>
          <img
            src={previewUrl}
            alt="Selected preview"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              marginTop: "8px",
            }}
          />
        </div>
      )}

      <div style={{ marginTop: "8px" }}>
        {/* Must be of type submit and no need for onClick because of onSubmit of form  */}
        <button type="submit">Upload</button>
      </div>

      {status && <p>{status}</p>}
    </form>
  );
};

export default App;
