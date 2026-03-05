<template>
  <div class="flex justify-between items-end h-15 mb-7">
    <div class="flex items-center">
      <div @click="router.push('/')" class="flex cursor-pointer">
        <div class="font-bold uppercase mr-2">Weather ME</div>
        <img src="@/assets/logo.svg" alt="Logo" class="h-6 w-6 mr-2" />
      </div>

      <span @click="openModalCityPicker" class="cursor-pointer hover:underline">{{ location }}</span>
    </div>
    <button
      @click="toggleTheme"
      class="flex items-center border-2 border-gray-300 rounded-lg px-3 py-1 dark:hover:bg-gray-800 dark:hover:text-white hover:bg-gray-100 cursor-pointer"
    >
      <span class="mr-2">{{ theme === 'dark' ? '🌑' : '☀️' }}</span>
      <span class="font-medium mr-2">{{ theme === 'dark' ? 'Dark' : 'Light' }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { useThemeStore } from '@/stores/theme.store';
import { useWeatherStore } from '@/stores/weather.store';
import { toRefs } from 'vue';

const weatherStore = useWeatherStore();
const { openModalCityPicker } = weatherStore;
const { location } = toRefs(weatherStore);

const themeStore = useThemeStore();
const { toggleTheme } = themeStore;
const { theme } = toRefs(themeStore);
</script>
