<template>
  <div>
    <img :src="`/src/assets/icons/${name}.svg`" :alt="name" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>
