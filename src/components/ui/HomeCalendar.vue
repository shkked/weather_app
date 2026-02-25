<template>
  <div>
    <!-- {{ dateWeek }} -->
    <div class="flex items-center overflow-x-auto max-w-[250px]" ref="containerCalendar" @scroll="onScroll">
      <div v-for="(week, weekIndex) in dateWeek" :key="weekIndex" class="flex items-center cursor-pointer">
        <div
          v-for="(day, dayIndex) in week"
          :key="dayIndex"
          class="text-xs text-gray-500 flex flex-col items-center mx-1"
        >
          {{ daysOfWeek(day) }}
          <div
            @click="pickDay(day)"
            class="mt-1 flex w-7 h-7 items-center justify-center gap-1 text-black"
            :class="{
              'bg-[rgb(38,50,137)] text-white rounded-full w-7 h-7': selectedDay === day.getDate(),
              'hover:bg-gray-200 rounded-full w-7 h-7': day.getDate() > selectedDay,
              'text-gray-400 dark:text-gray-600 hover:bg-gray-200 rounded-full w-7 h-7 ': day.getDate() < todayDay,
            }"
          >
            {{ day.getDate() }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CalendarDays } from '@/types/calendar.types';
import { nextTick, onMounted, ref } from 'vue';

const containerCalendar = ref<HTMLDivElement | null>(null);
const todayDate = new Date();
const todayDay = ref(todayDate.getDate());
const selectedDay = ref(todayDay.value);

const sourceDays = ref<CalendarDays[]>([
  CalendarDays[1],
  CalendarDays[2],
  CalendarDays[3],
  CalendarDays[4],
  CalendarDays[5],
  CalendarDays[6],
  CalendarDays[7],
]);

const daysOfWeek = (day: Date) => {
  let index = day.getDay() - 1;
  if (index < 0) index = 6;
  return makeShortDay(sourceDays.value[index]);
};
const pickDay = (day: Date) => {
  if (day.getDate() < todayDay.value) return;
  selectedDay.value = day.getDate();
  // emit('selectDay', day);
};
const getWeek = (startDate: Date): Date[] => {
  const start = new Date(startDate);
  const week: Date[] = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(start);
    date.setDate(start.getDate() + i);
    week.push(date);
  }
  return week;
};

const dateWeek = ref<Date[][]>([
  getWeek(new Date(new Date().setDate(new Date().getDate() - 7))),
  getWeek(new Date()),
  getWeek(new Date(new Date().setDate(new Date().getDate() + 7))),
]);

const onScroll = () => {
  if (!containerCalendar.value) return;

  const { scrollLeft, scrollWidth, clientWidth } = containerCalendar.value;

  if (scrollLeft + clientWidth >= scrollWidth - 50) {
    addNextWeek();
  }

  if (scrollLeft <= 50) {
    addPrevWeek();
  }
};

const makeShortDay = (dayName: string | undefined): string => {
  return dayName?.toLocaleLowerCase().slice(0, 1) || '';
};

const trimWeeks = () => {
  if (dateWeek.value.length > 7) {
    dateWeek.value.splice(0, 1);
  }
};
const addNextWeek = () => {
  const lastWeek = dateWeek.value.at(-1)!;
  const lastDay = lastWeek[6];

  dateWeek.value.push(getWeek(new Date(lastDay.setDate(lastDay.getDate() + 1))));

  trimWeeks();
};

const addPrevWeek = () => {
  const firstWeek = dateWeek.value[0];
  const firstDay = firstWeek[0];
  console.log(getWeek(new Date(firstDay.setDate(firstDay.getDate() - 7))));
  dateWeek.value.unshift(getWeek(new Date(firstDay.setDate(firstDay.getDate() - 7))));

  // компенсируем jump
  containerCalendar.value!.scrollLeft += containerCalendar.value!.clientWidth;

  trimWeeks();
};

onMounted(async () => {
  await nextTick();

  // прокрутка к центру
  containerCalendar.value!.scrollLeft =
    (containerCalendar.value!.scrollWidth - containerCalendar.value!.clientWidth) / 2 - 28;
});
</script>

<style scoped></style>
