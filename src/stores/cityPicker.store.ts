import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCityPickerStore = defineStore('cityPicker', () => {
  const isModalOpen = ref(false);

  const toggleModal = () => {
    isModalOpen.value = !isModalOpen.value;
  };

  return {
    isModalOpen,
    toggleModal,
  };
});
