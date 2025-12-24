<template>
  <div>
    <div class="flex items-center gap-3 overflow-x-auto">
      <div
        v-for="value in sourceWeek"
        :key="value"
        class="text-xs text-gray-500 flex flex-col items-center cursor-pointer"
      >
        {{ makeShortDay(value) }}
        <div
          @click="selectedDay = sourceWeek.indexOf(value)"
          class="mt-2 flex w-7 h-7 items-center justify-center gap-2 text-black"
          :class="{ 'bg-[rgb(38,50,137)] text-white rounded-full w-7 h-7': selectedDay === day }"
        >
          {{ todayDate.getDate() + sourceWeek.indexOf(value) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { CalendarDays } from '../types/calendar.types';

const todayDate = new Date();
const day = ref(todayDate.getDay());
const selectedDay = ref(day.value);

const sourceWeek = ref<CalendarDays[]>([
  CalendarDays.Sunday,
  CalendarDays.Monday,
  CalendarDays.Tuesday,
  CalendarDays.Wednesday,
  CalendarDays.Thursday,
  CalendarDays.Friday,
 CalendarDays.Saturday,
});

const makeShortDay = (dayName: string): string => {
  return dayName.toLocaleLowerCase().slice(0, 1);
};
</script>

<style scoped></style>
