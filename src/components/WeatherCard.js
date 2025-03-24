import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '../hooks/useTheme';

const WeatherCard = ({ weatherData }) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.cardColor }]}>
      <View style={styles.header}>
        <Text style={[styles.city, { color: theme.textColor }]}>
          {weatherData.city}, {weatherData.country}
        </Text>
        <Text style={[styles.date, { color: theme.textColor }]}>
          {weatherData.date}
        </Text>
      </View>

      <View style={styles.weatherInfo}>
        <Image
          style={styles.weatherIcon}
          source={{
            uri: `https://openweathermap.org/img/wn/${weatherData.icon}@4x.png`,
          }}
        />
        <Text style={[styles.temperature, { color: theme.textColor }]}>
          {weatherData.temperature}°C
        </Text>
      </View>

      <Text style={[styles.condition, { color: theme.textColor }]}>
        {weatherData.condition}
      </Text>
      <Text style={[styles.description, { color: theme.textColor }]}>
        {weatherData.description}
      </Text>

      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={[styles.detailLabel, { color: theme.textColor }]}>Humidity</Text>
          <Text style={[styles.detailValue, { color: theme.textColor }]}>
            {weatherData.humidity}%
          </Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={[styles.detailLabel, { color: theme.textColor }]}>Wind</Text>
          <Text style={[styles.detailValue, { color: theme.textColor }]}>
            {weatherData.windSpeed} m/s
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    marginBottom: 16,
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    marginTop: 4,
  },
  weatherInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  condition: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    textTransform: 'capitalize',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 16,
  },
  detailItem: {
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 14,
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default WeatherCard;