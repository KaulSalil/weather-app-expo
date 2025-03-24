import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { WeatherProvider } from './src/context/WeatherContext';
import { ThemeProvider } from './src/context/ThemeContext';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <HomeScreen />
        </SafeAreaView>
      </WeatherProvider>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;