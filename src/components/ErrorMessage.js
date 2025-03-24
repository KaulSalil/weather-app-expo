import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useTheme';

const ErrorMessage = ({ message }) => {
  const { theme } = useTheme();
  
  return (
    <View style={styles.container}>
      <Text style={[styles.errorText, { color: theme.isDarkMode ? '#ff6b6b' : '#d63031' }]}>
        {message.charAt(0).toUpperCase() + message.slice(1)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ErrorMessage;