import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import { FaSearch } from "react-icons/fa";
import ResponsiveMap from "../component/Map";
import Header from "../component/Header";

const SearchBar = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch weather data when component mounts or when searchTerm changes
    const fetchWeather = async () => {
      try {
        const response = await fetch(`YOUR_WEATHER_API_URL?q=Somalia&appid=YOUR_API_KEY`);
        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
        } else {
          // Handle error
          console.error("Failed to fetch weather data");
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search when form is submitted
    setSearchTerm(e.target.value);
  };

  return (
    <Container className="mt-10 h-[400px] bg-no-repeat bg-cover bg-[url('https://img.freepik.com/free-photo/dark-stormy-clouds_181624-61.jpg?w=740')]">
      <div>
        <Header/>
      </div>
      <div className="relative text-center pt-20">
        <input
          type="text"
          className="border border-gray-300 rounded py-2 px-4 md:px-10 focus:outline-none focus:border-blue-500 max-w-full md:max-w-md mx-auto"
          placeholder="Search Your Address, City or Zip Code"
          onChange={handleSearch}
        />
        <SearchIcon className="absolute left-1/2 transform -translate-x-1/2 top-[100px] text-gray-400 fas fa-search md:left-[560px] md:top-[100px] lg:left-[720px] lg:top-[100px] xl:left-[960px] xl:top-[100px]" />
      </div>
      <RecentLocations weatherData={weatherData} />
    </Container>
  );
};

const Container = tw.div`
  p-4
  bg-white
  rounded
  shadow
`;

const SearchIcon = tw(FaSearch)`
  absolute
  left-1/2
  transform
  -translate-x-1/2
  top-[100px]
  text-gray-400
  fas
  fa-search
  md:left-[560px]
  md:top-[100px]
  lg:left-[720px]
  lg:top-[100px]
  xl:left-[960px]
  xl:top-[100px]
`;

const RecentLocations = ({ weatherData }) => {
  return (
    <div>
      <div className="mt-10 p-4 bg-white rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Recent Locations</h3>
        <ul>
          {weatherData.map((location, index) => (
            <li key={index} className="flex items-center mb-2">
              <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded mr-2">
                {index + 1}
              </div>
              <div>
                <p className="text-gray-800 font-semibold">{location.name}</p>
                <p className="text-gray-500 text-sm">{location.sys.country}</p>
              </div>
              <div className="ml-auto text-gray-500">
                <p className="text-gray-800 font-semibold">{location.main.temp}°</p>
                <p className="text-gray-500 text-sm">RealFeel* {location.main.feels_like}°</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ResponsiveMap />
      </div>
    </div>
  );
};

export default SearchBar;
