import WeatherIcon from 'react-icons-weather';
import { Weather } from '../interfaces/weather';

export type WeatherSummaryProps = {
  weather: Weather;
};

const WeatherSummary = ({ weather }: WeatherSummaryProps) => {
  console.log(weather);
  return (
    <div className="box mt-5">
      <h1 className="text-center text-4xl">{weather.name}</h1>
      <div className="grid gap-10 grid-cols-2 mt-10">
        <div className="text-center">
          <WeatherIcon
            style={{ fontSize: '8rem' }}
            name="owm"
            iconId={weather.weather[0].id.toString()}
          />
        </div>
        <div>
          <p className="text-2xl font-bold">{weather.weather[0].main}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherSummary;
