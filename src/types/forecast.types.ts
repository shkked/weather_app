import type { IWeatherCondition } from './api.types.ts'

export interface IAstro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
}
export interface IDay {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_kph: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  condition: IWeatherCondition;
}
interface IHour {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: IWeatherCondition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  snow_cm: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
  short_rad: number;
  diff_rad: number;
  dni: number;
  gti: number;
}
export interface IForecastDay {
  date: string;
  date_epoch: number;
  day: IDay;
  astro: IAstro;
  hour: IHour[];
}
export interface IForecast {
  date: string;
  date_epoch: number;
  forecastday: IForecastDay[];
}
