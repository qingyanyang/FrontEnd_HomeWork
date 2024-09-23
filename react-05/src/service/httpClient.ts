import axios from "axios";

export const fetchWeatherData = async (cityName: string) => {
  const url = `${import.meta.env.VITE_REACT_APP_WEATHER_API_BASE_URL}?key=${
    import.meta.env.VITE_REACT_APP_WEATHER_API_KEY
  }&q=${cityName}&days=5&aqi=yes&alerts=no`;
  try {
    const res = await axios.get(url);
    if (res.status === 200) {
      console.log("Fetched data:", res.data);
      return res.data;
    }
    console.warn("Something wrong with code: ", res.status);
    return null;
  } catch (err) {
    console.error("Error fetching weather data:", err);
    throw err;
  }
};
