//import { WEATHER_API_KEY } from '@env';

const API_KEY =  '41c22508f61f915f5a44cab37d8a40c9'; // Replace with your actual API key if not using .env
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    
    const data = await response.json();
    
    if (data.cod !== 200) {
      throw new Error(data.message || 'Failed to fetch weather data');
    }
    
    return {
      city: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      condition: data.weather[0].main,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      date: new Date(data.dt * 1000).toLocaleDateString(),
    };
  } catch (error) {
    throw error;
  }
};