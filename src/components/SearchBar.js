import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useWeather } from '../hooks/useWeather';
import { useTheme } from '../hooks/useTheme';

const SearchBar = () => {
  const { city, setCity, handleSearch, loading } = useWeather();
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          { 
            backgroundColor: theme.cardColor,
            color: theme.textColor,
            borderColor: theme.isDarkMode ? '#444' : '#ddd'
          }
        ]}
        placeholder="Enter city name"
        placeholderTextColor={theme.isDarkMode ? '#aaa' : '#888'}
        value={city}
        onChangeText={setCity}
        onSubmitEditing={handleSearch}
      />
      <TouchableOpacity
        style={[
          styles.button,
          { opacity: loading ? 0.7 : 1 }
        ]}
        onPress={handleSearch}
        disabled={loading}
      >
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginRight: 8,
  },
  button: {
    height: 50,
    backgroundColor: '#2196F3',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SearchBar;