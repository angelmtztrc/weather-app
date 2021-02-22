import { useEffect, useState } from 'react';
import { Weather } from './interfaces/weather';
import { getFiveDaysWeather } from './lib/weather-api';
import { getBackground } from './lib/get-background';

// components
import Form from './components/Form';

import WeatherSummary from './components/WeatherSummary';
import NotFound from './components/NotFound';

function App() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [city, setCity] = useState<string>('New York');

  useEffect((): void => {
    async function getWeather() {
      const result = await getFiveDaysWeather(city);
      if (result) {
        setWeather(result);
      } else {
        setWeather(null);
      }
    }
    getWeather();
  }, [city]);

  return (
    <div
      style={{
        backgroundImage: `url(${getBackground(weather?.weather[0].main)})`
      }}
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
    >
      <Form setCity={setCity} />
      {weather ? <WeatherSummary weather={weather} /> : <NotFound />}
    </div>
  );
}

export default App;
