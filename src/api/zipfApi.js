import axios from "axios";

// Función POST para el endpoint "upload"
export const uploadPost = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post("https://microservice-zipf.onrender.com/zipf-plot", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    
    if (response.status === 200) {
      console.log(response.data)
      return {
        vector_keys: response.data.vector_keys,
        vector_ranking: response.data.vector_ranking,
        vector_values: response.data.vector_values,
        words_trend_n50: response.data.words_trend_n50,
        values_trend_n50: response.data.values_trend_n50,
        total_words: response.data.total_words,
        total_different_words: response.data.total_different_words,
        linear_regression_parameters: response.data.linear_regression_parameters,

      };
    } else {
      return { success: false, message: "Error processing file. Please select a txt extension file)" };
    }
  } catch (error) {
    alert("Error processing file. Please select a txt extension file");
    return { success: false, message: "Error en la conexión con el servidor." };
  }
};
