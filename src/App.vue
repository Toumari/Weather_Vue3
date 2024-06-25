<template>
  <div v-if="isLoading">Loading weather data...</div>
  <div v-else-if="error">Error: {{ error }}</div>
  <div v-else>
    <h2>Weather in {{ weatherData.name }}</h2>
    <p>Temperature: {{ Math.round(weatherData.main.temp) }}&deg;</p>
    <p>Feels like: {{ Math.round(weatherData.main.feels_like) }}&deg;</p>
    <p>{{ weatherData.weather[0].description }}</p>
  </div>
</template>

<script setup>
import useWeather from './composables/useWeather';

const cityName = 'Sheffield'; // Replace with desired city
const { weatherData, isLoading, error, fetchWeather } = useWeather(cityName);

fetchWeather();
</script>