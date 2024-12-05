// import React from 'react';
// import { FaStar, FaRegStar, FaSun, FaCloudSun, FaCloud, FaCloudRain, FaCloudShowersHeavy } from 'react-icons/fa';

// const WeatherCard = ({ data, addFavorite, removeFavorite, favorites }) => {
//   const { name, weather, main, wind } = data;
//   console.log("weather", weather)
//   const condition = weather[0].main.toLowerCase();
//   console.log("condition", condition)
//   const isFavorite = favorites.includes(name);

//   // Function to choose background class based on weather
//   const getBackgroundClass = () => {
//     if (condition === 'clear') return 'sunny';
//     if (condition === 'rain') return 'rainy';
//     if (condition === 'clouds') return 'cloudy';
//     return '';
//   };

//   // Function to get the appropriate icon based on weather condition
//   const getWeatherIcon = () => {
//     if (condition === 'clear') return <FaSun />;
//     if (condition === 'clouds') return <FaCloud />;
//     if (condition === 'rain') return <FaCloudRain />;
//     if (condition === 'drizzle') return <FaCloudShowersHeavy />;
//     if (condition === 'storm') return <FaCloudShowersHeavy />;
//     return <FaCloudSun />; // Default: Cloudy
//   };

//   return (
//     <div className={`weather-card ${getBackgroundClass()}`}>
//       <h2>{name}</h2>
//       <div className="weather-info">
//         <p>{weather[0].description}</p>
//         <p>{getWeatherIcon()}</p> {/* Display weather condition icon */}
//         <p>Temperature: {main.temp}°C</p>
//         <p>Humidity: {main.humidity}%</p>
//         <p>Wind Speed: {wind.speed} m/s</p>
//       </div>
//       <button onClick={() => isFavorite ? removeFavorite(name) : addFavorite(name)}>
//         {isFavorite ? <FaStar /> : <FaRegStar />} Add to Favorites
//       </button>
//     </div>
//   );
// };

// export default WeatherCard;



import React from 'react';
import { FaStar, FaRegStar, FaSun, FaCloudSun, FaCloud, FaCloudRain, FaCloudShowersHeavy } from 'react-icons/fa';

const WeatherCard = ({ data, addFavorite, removeFavorite, favorites }) => {
  const { name, weather, main, wind } = data;
  const condition = weather[0].main.toLowerCase();
  const isFavorite = favorites.includes(name);

  const getBackgroundClass = () => {
    if (condition === 'clear') return 'sunny';
    if (condition === 'rain') return 'rainy';
    if (condition === 'clouds') return 'cloudy';
    if (condition === 'haze') return 'haze';
    if (condition === 'mist') return 'mist';
    if (condition === 'smoke') return 'smoke';
    return '';
  };

  const getWeatherIcon = () => {
    if (condition === 'clear') return <FaSun />;
    if (condition === 'clouds') return <FaCloud />;
    if (condition === 'rain') return <FaCloudRain />;
    if (condition === 'drizzle') return <FaCloudShowersHeavy />;
    if (condition === 'storm') return <FaCloudShowersHeavy />;
    return <FaCloudSun />; // Default: Cloudy
  };

  return (
    <div className={`weather-card ${getBackgroundClass()}`}>
      <h2>{name}</h2>
      <div className="weather-info">
        <p>{weather[0].description}  {getWeatherIcon()}</p>
        {/* <p>{getWeatherIcon()}</p>  */}
        <p>Temperature: {main.temp}°C</p>
        <p>Humidity: {main.humidity}%</p>
        <p>Wind Speed: {wind.speed} m/s</p>
      </div>
      <button onClick={() => isFavorite ? removeFavorite(name) : addFavorite(name)}>
        {isFavorite ? <FaStar /> : <FaRegStar />} Add to Favorites
      </button>
    </div>
  );
};

export default WeatherCard;
