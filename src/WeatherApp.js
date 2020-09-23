import React from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";
import "./WeatherApp.css";

const WeatherApp = () => {
  return (
    <section>
      <Search />
      <div className="container">
        <Weather />
      </div>
    </section>
  );
};

export default WeatherApp;
