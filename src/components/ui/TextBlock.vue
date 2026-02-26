<template>
  <div
    class="bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-6"
  >
    <div class="text-xl mb-4 text-[rgb(38,50,137)] dark:text-white">{{ titleText }}</div>
    <div class="bg-gray-100 dark:bg-gray-800 dark:text-white p-4 rounded-lg">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  titleText: string;
}>();
</script>

<style scoped></style>
