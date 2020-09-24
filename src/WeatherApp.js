import React, { useState } from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [main, setMain] = useState("");
  const [country, setCountry] = useState("");
  const [temp, setTemp] = useState(0);
  const [temp_min, setTemp_min] = useState(0);
  const [temp_max, setTemp_max] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [deg, setDeg] = useState(0);
  const [weatherIcon, setIcon] = useState('')

  return (
    <section>
      <Search
        setCity={setCity}
        setDescription={setDescription}
        setMain={setMain}
        setCountry={setCountry}
        setTemp={setTemp}
        setTemp_min={setTemp_min}
        setTemp_max={setTemp_max}
        setSpeed={setSpeed}
        setDeg={setDeg}
        setIcon={setIcon}
      />
      <div className="container">
        <Weather
          city={city}
          description={description.toUpperCase()}
          main={main.toLowerCase()}
          country={country}
          temp={Math.floor(temp)}
          temp_min={Math.floor(temp_min)}
          temp_max={Math.floor(temp_max)}
          speed={Math.floor(speed * 2.237)}
          deg={deg}
          weatherIcon={weatherIcon}
        />
      </div>
    </section>
  );
};

export default WeatherApp;
