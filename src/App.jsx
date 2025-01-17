import './App.css'
import FileUploadForm from './components/FileUploadForm'

function App() {

  return (
    <>
      <h1>Plot Zipf's Law</h1>
      <h4 className='desc'>File <span>(txt extension)</span> as a Corpus</h4>
      <div>
        <FileUploadForm />
      </div>
      <p className="read-the-docs">
        This project has been made to scatter plot a Corpus of text (txt file's extension) ranking related to frequency. <br></br>
        Este proyecto tiene como proposito graficar un corpus de texto (archivo de extension txt) en base a su ranking y frecuencia.
      </p>
    </>
  )
}

export default App
