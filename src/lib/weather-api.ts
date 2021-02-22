import { Weather } from '../interfaces/weather';

export const getFiveDaysWeather = async (city: string): Promise<Weather> => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}&units=metric`;
  const response = await fetch(url);
  const { main, weather } = await response.json();
  return { main, weather };
};
