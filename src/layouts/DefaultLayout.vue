<template>
  <div>
    <HeaderLayout class="px-4 pt-4" />
    <div class="container-fluid px-4">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderLayout from '@/components/HeaderLayout.vue';
</script>

<style lang="scss" scoped></style>
