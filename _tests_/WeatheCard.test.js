import React from 'react';
import { render } from '@testing-library/react-native';
import WeatherCard from '../src/components/WeatherCard';
import { ThemeContext } from '../src/context/ThemeContext';

// Mock data
const mockWeatherData = {
  city: 'London',
  country: 'GB',
  temperature: 15,
  condition: 'Cloudy',
  description: 'few clouds',
  icon: '02d',
  humidity: 78,
  windSpeed: 5.2,
  date: '3/24/2025',
};

// Mock theme
const mockTheme = {
  theme: {
    backgroundColor: '#f8f8f8',
    textColor: '#000000',
    cardColor: '#ffffff',
    isDarkMode: false,
  },
};

describe('WeatherCard', () => {
  it('renders correctly with weather data', () => {
    const { getByText } = render(
      <ThemeContext.Provider value={mockTheme}>
        <WeatherCard weatherData={mockWeatherData} />
      </ThemeContext.Provider>
    );

    // Check if city and country are displayed
    expect(getByText('London, GB')).toBeTruthy();
    
    // Check if temperature is displayed
    expect(getByText('15°C')).toBeTruthy();
    
    // Check if weather condition is displayed
    expect(getByText('Cloudy')).toBeTruthy();
    
    // Check if weather description is displayed
    expect(getByText('few clouds')).toBeTruthy();
    
    // Check if humidity and wind speed are displayed
    expect(getByText('78%')).toBeTruthy();
    expect(getByText('5.2 m/s')).toBeTruthy();
  });
});