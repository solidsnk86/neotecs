import {
  LucideThermometer,
  Droplets,
  ArrowDownWideNarrow,
  Wind,
  Compass,
  Sunrise,
  Sunset,
  Ruler,
  ArrowUpIcon,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Weather } from './Weather';
import { WeatherResponse } from '@/types/definitions';

export const WeatherAPI = () => {
  const [data, setData] = useState<WeatherResponse>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [obj, setObjetc] = useState({
    latitude: Number(),
    longitude: Number(),
  });

  useEffect(() => {
    const getPosition = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setObjetc({
          latitude: lat,
          longitude: lon,
        });
      });
    };

    const fetchData = async () => {
      const url = `https://solid-geolocation.vercel.app/weather?latitude=${obj.latitude}&longitude=${obj.longitude}`;

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const weatherData = await res.json();
        setData(weatherData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPosition();
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, [obj.latitude, obj.longitude]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  const { name } = data;
  const temperature = Weather.kelvinToCelsius(data.main.temp).toFixed(0);
  const maxTemperature = Weather.kelvinToCelsius(data.main.temp_max).toFixed(0);
  const minTemperature = Weather.kelvinToCelsius(data.main.temp_min).toFixed(0);
  const feelsLike = Weather.kelvinToCelsius(data.main.feels_like).toFixed(0);
  const condition = Weather.mapConditionEs(data.weather[0].description);
  const humidity = data.main.humidity;
  const iconUrl = Weather.getWeatherIconUrl(data.weather[0].icon);
  const pressure = data.main.pressure;
  const windSpeed = data.wind.speed;
  const windDegree = data.wind.deg;
  const sunrise = Weather.formatTime(data.sys.sunrise);
  const sunset = Weather.formatTime(data.sys.sunset);
  const seaLevel = data.main.grnd_level;

  const dataArr = [];
  dataArr.push(
    temperature,
    maxTemperature,
    minTemperature,
    feelsLike,
    condition,
    humidity,
    iconUrl,
    pressure,
    windSpeed,
    windDegree,
    sunrise,
    sunset,
    seaLevel,
  );

  // Weather.sendWeatherDataToSupabase({
  //   temperature,
  //   feelsLike,
  //   humidity,
  //   pressure,
  //   windSpeed,
  //   windDegree,
  //   sunrise,
  //   sunset,
  // });

  return (
    <div
      className="grid justify-center mx-auto w-fit bg-card border dark:border-zinc-800 border-zinc-200 rounded-xl overflow-hidden"
      style={{ zIndex: 2 }}
    >
      <header className="p-6 bg-zinc-200 dark:bg-zinc-900 text-gray-600 dark:text-gray-300 font-semibold">
        <p>El tiempo en {name} hoy!</p>
        <div className="inline-flex justify-center mx-auto">
          <p>{condition}</p>
        </div>
        <div className="flex items-center mx-auto justify-center">
          <img
            width={65}
            height={65}
            src={iconUrl}
            alt={`Icono del tiempo: ${condition}`}
          />
          <h1
            className="text-4xl font-bold"
            style={{
              color: `${Weather.getTemperatureColor(parseInt(temperature))}`,
            }}
          >
            {temperature}°
            <div className="inline-flex items-center">
              <LucideThermometer className="inline text-text-second w-4 h-4" />
              <small className="inline text-text-second font-thin text-base">
                c
              </small>
            </div>
          </h1>
        </div>
        <small className="font-semibold font-mono space-x-1">
          <small className="uppercase text-xs">max </small>
          {parseInt(maxTemperature) + 4}° |{' '}
          <small className="uppercase text-xs">min </small>
          {parseInt(minTemperature) - 7}°
        </small>
      </header>
      <aside className="grid text-left border-t border-zinc-400/50 dark:border-zinc-700 bg-zinc-300 dark:bg-zinc-800 dark:text-gray-300 text-gray-600">
        <div className="grid p-6">
          <small>
            <LucideThermometer className="inline w-4 h-4 -translate-y-[2px] mr-2" />
            Sensación Térmica: {feelsLike} °C
          </small>
          <small>
            <Droplets className="inline w-4 h-4 -translate-y-[2px] mr-2" />
            Humedad: {humidity} %
          </small>
          <small>
            <ArrowDownWideNarrow className="inline w-4 h-4 -translate-y-[2px] mr-2" />
            Presión Atmosférica: {pressure} hPa
          </small>
          <small>
            <Wind className="inline w-4 h-4 -translate-y-[2px] mr-2" />
            Velocidad del viento: {windSpeed} Km/h
          </small>
          <small className="items-center">
            <Compass className="inline w-4 h-4 -translate-y-[2px] mr-2 -rotate-45" />
            Dirección del viento: {windDegree}°{' '}
          </small>
          <small>
            <Sunrise className="inline w-4 h-4 -translate-y-[2px] mr-2" />
            Amanecer: {sunrise} AM
          </small>
          <small>
            <Sunset className="inline w-4 h-4 -translate-y-[2px] mr-2" />
            Atardecer: {sunset} PM
          </small>
          <small className="relative">
            <Ruler className="inline w-4 h-4 -translate-y-[2px] mr-2" />
            Nivel: {seaLevel} Mts. sobre nivel del mar
          </small>
        </div>
      </aside>
    </div>
  );
};
