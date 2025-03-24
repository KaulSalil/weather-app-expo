# Weather App

A simple React Native weather application that fetches weather data from the OpenWeatherMap API. The app allows users to search for cities and view current weather conditions.

## Features

- Search for cities to get current weather data
- Display current temperature, weather condition, and weather icon
- Error handling for city not found
- State persistence (last searched city)
- Dark mode toggle

## Architecture & Design Decisions

### State Management
The app uses React Context API for state management. This provides a lightweight solution for sharing state across components without prop drilling, while avoiding the additional complexity of Redux for this relatively simple app.

### Project Structure
- `/components`: Reusable UI components
- `/context`: Context providers for state management
- `/screens`: Main screen components
- `/services`: API service functions
- `/utils`: Utility functions and constants
- `/hooks`: Custom hooks

### API Integration
The app uses the OpenWeatherMap API with fetch for API calls. API requests are abstracted into a service layer to separate concerns.

### Storage
AsyncStorage is used to persist the last searched city and theme preference.

## Setup Instructions

### Prerequisites
- Node.js (v14 or newer)
- npm or yarn
- React Native development environment set up

### Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

2. Install dependencies:
```
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
```
WEATHER_API_KEY=your_api_key_here
```

4. Start the Metro bundler:
```
npm start
# or
yarn start
```

5. Run on iOS:
```
npm run ios
# or
yarn ios
```

6. Run on Android:
```
npm run android
# or
yarn android
```

## Testing

Run tests with:
```
npm test
# or
yarn test
```