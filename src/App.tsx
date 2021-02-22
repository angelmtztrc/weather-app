import { useEffect, useState } from 'react';
import { getFiveDaysWeather } from './lib/weather-api';

// components
import Form from './components/Form';
import { Weather } from './interfaces/weather';

function App() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [city, setCity] = useState<string>('New York');

  useEffect((): void => {
    async function getWeather() {
      const result = await getFiveDaysWeather(city);
      setWeather(result);
    }
    getWeather();
  }, [city]);

  return (
    <div
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1493314894560-5c412a56c17c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
      }}
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
    >
      <Form setCity={setCity} />
    </div>
  );
}

export default App;
