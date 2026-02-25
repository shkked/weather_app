import { defineStore } from 'pinia';

export const useCityPickerStore = defineStore('cityPicker', () => {
  const openModalCityPicker = () => {
    console.log('Open city picker modal');
  };
  return {
    openModalCityPicker,
  };
});
