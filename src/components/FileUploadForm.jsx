import React, { useState } from "react";
import { uploadPost } from "../api/zipfApi";
import ZipfScatterPlot from "./ZipfScatterPlot";
import Loader from "./Loader";

const FileUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(false);
  const [vRanking, setVRanking] = useState([]);
  const [vKeys, setVKeys] = useState([]);
  const [vValues, setVValues] = useState([]);
  const [chargingStatus, setChargingStatus] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    setVRanking([]);
    setVKeys([]);
    setVValues([]);
    setUploadStatus(false);
    setChargingStatus(true);
    event.preventDefault();

    //if (!selectedFile) {
    //
    //  return;
    //}

    // Llamar a la función para subir el archivo
    const response = await uploadPost(selectedFile);
    setChargingStatus(false);
    if ("message" in response) {
      console.error(response.message);
    } else {
      setVKeys(response.vector_keys);
      setVRanking(response.vector_ranking);
      setVValues(response.vector_values);
      setUploadStatus(true);
    }
  };

  return (
    <div className="file-upload-form">
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Plot!</button>
      </form>
      {chargingStatus && <Loader />}
      {uploadStatus && (
        <ZipfScatterPlot xAxis={vRanking} yAxis={vValues} vKeys={vKeys} />
      )}
    </div>
  );
};

export default FileUploadForm;
