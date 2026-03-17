<template>
  <dialog
    v-show="isModalOpen"
    ref="modalAddUser"
    class="fixed inset-0 z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 flex items-center justify-center rounded-lg"
  >
    <div>
      <button
        @click="toggleModal"
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div class="bg-white p-9 rounded-lg shadow-lg w-full">
      <h2 class="text-2xl font-bold mb-6">Выберите город</h2>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { useCityPickerStore } from '@/stores/cityPicker.store';
import { toRefs } from 'vue';

const cityPickerStore = useCityPickerStore();
const { isModalOpen } = toRefs(cityPickerStore);
const { toggleModal } = cityPickerStore;
</script>

<style scoped></style>
