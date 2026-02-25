<template>
  <div>
    <DefaultLayout />
  </div>
</template>

<script setup lang="ts">
import { onMounted, toRefs } from 'vue';
import DefaultLayout from './layouts/DefaultLayout.vue';
import { useThemeStore } from './stores/theme.store';

const themeStore = useThemeStore();
const { theme } = toRefs(themeStore);

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    theme.value = savedTheme;
    document.documentElement.classList.toggle('dark', theme.value === 'dark');
    localStorage.setItem('theme', theme.value);
  }
});
</script>
