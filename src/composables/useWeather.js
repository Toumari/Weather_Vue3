import axios from "axios";
import { ref } from "vue";

const API_KEY = import.meta.env.VITE_API_KEY; // Replace with your actual API key
console.log("API_KEY", API_KEY);

export default function useWeather(cityName) {
  const weatherData = ref(null);
  const isLoading = ref(false);
  const error = ref(null);

  const fetchWeather = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      weatherData.value = response.data;
    } catch (err) {
      console.error("Error fetching weather data:", err);
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  };

  return { weatherData, isLoading, error, fetchWeather };
}
