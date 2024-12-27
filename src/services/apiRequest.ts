export const apiRequest = async (url: string, options = {}) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const message = `HTTP error! Status: ${response.status}`;
      console.error("API request failed with HTTP error:", message);
      throw new Error(message);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
};
