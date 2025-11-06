interface WeatherMain {
  temp: number;
  humidity: number;
}

interface WeatherCondition {
  description: string;
  icon: string;
}

interface WeatherResponse {
  name: string;
  main: WeatherMain;
  weather: WeatherCondition[];
  wind: { speed: number };
}