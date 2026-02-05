<template>
  <div>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <div class="flex items-center justify-center w-37 h-37 rounded-full bg-yellow-400">
          <div class="flex items-center justify-center w-32 h-32 rounded-full bg-orange-500">
            <div class="w-16 h-16 rounded-full bg-red-500"></div>
          </div>
        </div>
        <div class="ml-5 flex items-center">
          <div class="text-5xl font-bold">Sunny</div>
          <div class="text-5xl mr-2">,</div>
          <div class="text-5xl font-bold mr-5">+25°</div>
          <div class="text-6xl text-gray-300 font-bold">Today</div>
        </div>
      </div>
      <div class="ml-5 flex items-center">
        <HomeCalendar />
      </div>
    </div>
    <div class="mt-10">
      <TextBlock titleText="Forecast">
        <div class="flex items-center flex-col w-[300px]">
          <div v-for="i in 10" :key="i" class="flex items-center gap-3">
            <iconWeather name="sun-fill" class="w-6 h-6 text-gray-500 mr-2" />
            <div class="text-gray-500 mb-2">Mon</div>
            <div class="text-black font-bold">+22°</div>
          </div>
        </div>
      </TextBlock>
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeCalendar from '@/components/ui/HomeCalendar.vue';
import TextBlock from '@/components/ui/TextBlock.vue';
import iconWeather from '@/components/ui/iconWeather.vue';
</script>

<style scoped></style>
