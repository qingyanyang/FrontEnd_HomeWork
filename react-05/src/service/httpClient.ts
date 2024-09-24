import { WEATHER_API_KEY, WEATHER_BASE_URL } from "@/constants";
import axios from "axios";

export const fetchWeatherData = async (cityName: string) => {
  const url = `${WEATHER_BASE_URL}?key=${WEATHER_API_KEY}&q=${cityName}&days=5&aqi=yes&alerts=no`;
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
