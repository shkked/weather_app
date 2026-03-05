import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWeatherStore = defineStore('weather', () => {
  const date = new Date();
  const location = ref('Moscow');
  const selectedDate = ref(date.toISOString().slice(0, 10));

  const setSelectedDate = (date: string) => {
    selectedDate.value = date;
  };

  const openModalCityPicker = () => {
    console.log('Open city picker modal');
  };

  async function getWeather(date: string, location: string) {
    try {
      // TODO доделать получение погоды по дате
      const { latitude, longitude } = await getCoordinates(location);
      const response = await axios.get(`https://api.open-meteo.com/v1/forecast`, {
        params: {
          latitude,
          longitude,
          hourly: 'temperature_2m',
        },
      });
      return response.data;
    } catch (e) {
      console.error(e);
    }
  }
  async function getLocationByCoordinates(latitude: number, longitude: number) {
    try {
      const response = await axios.get(`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`);
      return response.data.results[0].name;
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
    location,
    selectedDate,
    setSelectedDate,
    getWeather,
    getCoordinates,
    openModalCityPicker,
  };
});
