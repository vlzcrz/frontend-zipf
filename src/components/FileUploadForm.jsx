import React, { useEffect, useRef, useState } from "react";
import { uploadPost } from "../api/zipfApi";
import ZipfScatterPlot from "./ZipfScatterPlot";
import Loader from "./Loader";
import ShowData from "./ShowData";
import ShowStats from "./ShowStats";

const FileUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(false);
  const [vRanking, setVRanking] = useState([]);
  const [vKeys, setVKeys] = useState([]);
  const [vValues, setVValues] = useState([]);
  const [vTrendWords50, setVTrendWords50] = useState([]);
  const [vCountWords50, setVCountWords50] = useState([]);
  const [totalWords, setTotalWords] = useState(0);
  const [totalDifferentWords, setTotalDifferentWords] = useState(0);
  const [chargingStatus, setChargingStatus] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (uploadStatus && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [uploadStatus]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (event) => {
    setVRanking([]);
    setVKeys([]);
    setVValues([]);
    setUploadStatus(false);
    setChargingStatus(true);
    event.preventDefault();

    // Llamar a la función para subir el archivo
    const response = await uploadPost(selectedFile);
    setChargingStatus(false);
    if ("message" in response) {
      console.error(response.message);
    } else {
      setVKeys(response.vector_keys);
      setVRanking(response.vector_ranking);
      setVValues(response.vector_values);
      setTotalWords(response.total_words);
      setTotalDifferentWords(response.total_different_words);
      setVTrendWords50(response.words_trend_n50);
      setVCountWords50(response.values_trend_n50);
      setUploadStatus(true);
    }
  };

  return (
    <div className="file-upload-form">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="file-input"
          className="custom-file-label cursor-pointer bg-primary text-white rounded hover:bg-error py-3.5 px-8 w-8 h-16"
        >
          {selectedFile ? selectedFile.name : "Choose file"}
        </label>
        <input
          id="file-input"
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          className="btn btn-outline btn-primary w-16 my-4 mx-4"
          type="submit"
        >
          Plot
        </button>{" "}
      </form>
      {chargingStatus && <Loader />}
      {uploadStatus && (
        <>
          <div ref={sectionRef}>
            <ZipfScatterPlot
              xAxis={vRanking}
              yAxis={vValues}
              vKeys={vKeys}
              file_name={selectedFile.name}
            />
          </div>

          <ShowStats
            total_words={totalWords}
            total_different_words={totalDifferentWords}
            most_used_word={vKeys[0]}
            least_used_word={vKeys[vKeys.length - 1]}
            children={
              <>
                <h2 className="stat stat-title text-black">
                  Words sorted by rank
                </h2>
                <ShowData
                  words_trend_n50={vTrendWords50}
                  qty_trend_n50={vCountWords50}
                />
              </>
            }
          />
        </>
      )}
    </div>
  );
};

export default FileUploadForm;
