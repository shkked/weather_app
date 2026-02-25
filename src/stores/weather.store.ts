import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWeatherStore = defineStore('weather', () => {
  const date = new Date();
  const selectedDate = ref(date.toISOString().slice(0, 10));

  return {
    selectedDate,
  };
});
