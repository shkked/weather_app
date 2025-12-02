<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <div class="flex items-center justify-center w-37 h-37 rounded-full bg-yellow-400">
        <div class="flex items-center justify-center w-32 h-32 rounded-full bg-orange-500">
          <div class="w-16 h-16 rounded-full bg-red-500"></div>
        </div>
      </div>
      <div class="ml-5 flex items-center">
        <div class="text-5xl">Sunny</div>
        <div class="text-5xl mr-2">,</div>
        <div class="text-5xl font-bold mr-5">+25°</div>
        <div class="text-6xl text-gray-300 font-bold">Today</div>
      </div>
    </div>
    <div class="ml-5 flex items-center">
      <vc-calendar :attributes="vcAttributes" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const vcAttributes = ref<object[]>([
  {
    key: 'today',
    highlight: true,
    dates: new Date(),
  },
]);
</script>

<style scoped></style>
