import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchWeatherData } from '../services/weatherService';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load last searched city from storage
  useEffect(() => {
    const loadLastCity = async () => {
      try {
        const savedCity = await AsyncStorage.getItem('lastCity');
        if (savedCity) {
          setCity(savedCity);
          fetchWeather(savedCity);
        }
      } catch (e) {
        console.error('Failed to load last city', e);
      }
    };

    loadLastCity();
  }, []);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeatherData(cityName);
      setWeatherData(data);
      
      // Save the last searched city
      await AsyncStorage.setItem('lastCity', cityName);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeather(city);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        weatherData,
        loading,
        error,
        handleSearch,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};