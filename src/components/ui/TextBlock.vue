<template>
  <div class="border border-gray-300 p-6">
    <div class="text-xl mb-4 text-[rgb(38,50,137)]">{{ titleText }}</div>
    <div class="bg-gray-100 p-4 rounded-lg">
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
