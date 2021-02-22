interface WeatherStatus {
  description: string;
  icon: string;
  main: string;
  id: number;
}

export interface Weather {
  name: string;
  main: {
    humedity: number;
    feels_like: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: WeatherStatus[];
}
