import WeatherIcon from 'react-icons-weather';
import { Weather } from '../interfaces/weather';

export type WeatherSummaryProps = {
  weather: Weather;
};

const WeatherSummary = ({ weather }: WeatherSummaryProps) => {
  return (
    <div className="box mt-5">
      <h1 className="text-center text-4xl">{weather.name}</h1>
      <div className="grid gap-10 grid-cols-2 mt-10">
        <div className="my-10 text-center">
          <WeatherIcon
            style={{ fontSize: '8rem' }}
            name="owm"
            iconId={weather.weather[0].id.toString()}
          />
        </div>
        <div>
          <p className="text-2xl font-bold">{weather.weather[0].main}</p>
          <div className="mt-4 text-gray-900 text-base">
            <p>
              <span className="text-gray-600">Current:</span>{' '}
              {weather.main.temp}&#8451;
            </p>
            <p>
              <span className="text-gray-600">Max:</span>{' '}
              {weather.main.temp_max}&#8451;
            </p>
            <p>
              <span className="text-gray-600">Low:</span>{' '}
              {weather.main.temp_min}&#8451;
            </p>
            <p>
              <span className="text-gray-600">Humidity:</span>{' '}
              {weather.main.humidity}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherSummary;
