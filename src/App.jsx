import "./App.css";
import FileUploadForm from "./components/FileUploadForm";

function App() {
  return (
    <div className="app-container">
      <main>
        <h1 className="title">Plot Zipf's Law</h1>
        <h4 className="desc">
          File (<span className="text-primary font-extrabold">txt</span>
          {" or "}
          <span className="text-error font-extrabold">pdf</span> extension) as a
          Corpus
        </h4>
        <div>
          <FileUploadForm />
        </div>
      </main>

      <p className="read-the-docs">
        This project has been made to scatter plot a Corpus of text ("txt" of
        "pdf" file's extension) ranking related to frequency. <br></br>
        Este proyecto tiene como proposito graficar un Corpus de texto (archivo
        de extension "txt" o "pdf") en base a su ranking y frecuencia.
      </p>
    </div>
  );
}

export default App;
