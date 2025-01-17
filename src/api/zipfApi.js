import axios from "axios";

// Función POST para el endpoint "upload"
export const uploadPost = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post("https://microservice-zipf.onrender.com/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    
    if (response.status === 200) {
      console.log(response.data)
      return {
        vector_keys: response.data.vector_keys,
        vector_ranking: response.data.vector_ranking,
        vector_values: response.data.vector_values
      };
    } else {
      return { success: false, message: "Error processing file. Please select a txt extension file)" };
    }
  } catch (error) {
    alert("Error processing file. Please select a txt extension file");
    return { success: false, message: "Error en la conexión con el servidor." };
  }
};
