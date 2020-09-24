import React, { useEffect, useState } from "react";
import "./Search.css";



const weatherIcon = {
  clear: 'clear.png',
  clouds: 'cloudy.png',
  rain: 'rain.png',
  sunny: 'sunny.png'
};


const Search = ({
  setCity,
  setDescription,
  setMain,
  setCountry,
  setTemp,
  setTemp_min,
  setTemp_max,
  setSpeed,
  setDeg,
  setIcon
}) => {
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather/?";
  const APP_ID = '70e19ba461fd1eb09a6eea1bbf30338f'

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("london");

  const getWeather = async () => {
    const res = await fetch(
      `${BASE_URL}q=${query}&appid=${APP_ID}&units=metric`
    );
    const weatherData = await res.json();
    const city = weatherData.name;
    const country = weatherData.sys.country;
    const { description, main } = weatherData.weather[0];
    const { temp, temp_max, temp_min } = weatherData.main;
    const { deg, speed } = weatherData.wind;
    const icon = weatherIcon[main.toLowerCase()]

    setCity(city);
    setCountry(country);
    setDescription(description);
    setMain(main);
    setTemp(temp);
    setTemp_max(temp_max);
    setTemp_min(temp_min);
    setDeg(deg);
    setSpeed(speed);
    setIcon(icon)
  };

  useEffect(() => {
    getWeather();
    // eslint-disable-next-line
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  };

  return (
    <form className="search_bar" onSubmit={(e) => updateQuery(e)}>
      <input
        type="text"
        placeholder="Input City"
        value={search}
        name="city"
        autoComplete="off"
        onChange={(e) => updateSearch(e)}
      />
    </form>
  );
};

export default Search;
