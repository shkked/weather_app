import type { IForecast } from './forecast.types';

export interface ILocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface ICondition {
  text: string;
  icon: string;
  code: number;
}

export interface IWeatherCondition {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  condition: ICondition;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  humidity: number;
  cloud: number;
}

export interface IApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface IWeatherResponse {
  location: ILocation;
  current: IWeatherCondition;
  forecast: IForecast[];
}
