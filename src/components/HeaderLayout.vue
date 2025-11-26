<template>
  <div class="flex justify-between align-center">
    <div class="flex align-center">
      <div class="font-bold uppercase">Weather FM</div>
      <img class="" src="#" alt="logo" />
      <span>{{ cityName }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const cityName = ref<string>('Moscow');
</script>
