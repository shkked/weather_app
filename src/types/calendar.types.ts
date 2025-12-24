export const CalendarDays = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  7: 'Sunday',
} as const;

export type CalendarDays = (typeof CalendarDays)[keyof typeof CalendarDays];
