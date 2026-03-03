import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWeatherStore = defineStore('weather', () => {
  const date = new Date();
  const selectedDate = ref(date.toISOString().slice(0, 10));

  const setSelectedDate = (date: string) => {
    selectedDate.value = date;
  };

  async function getWeather(date: string, location: string) {
    try {
      // TODO доделать получение погоды по дате
      const { latitude, longitude } = await getCoordinates(location);
      const response = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
      );
      return response.data;
    } catch (e) {
      console.error(e);
    }
  }
  async function getCoordinates(location: string): Promise<{ latitude: number; longitude: number } | undefined> {
    try {
      const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search`, {
        params: {
          name: location,
          count: 1,
        },
      });
      const results = response.data.results[0];
      return {
        latitude: results.latitude,
        longitude: results.longitude,
      };
    } catch (e) {
      console.error(e);
    }
  }
  return {
    selectedDate,
    setSelectedDate,
    getWeather,
    getCoordinates,
  };
});
