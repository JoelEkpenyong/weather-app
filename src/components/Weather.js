import React from "react";
import "./Weather.css";





const windDirection = (deg) => {
  if (deg < 90) {
    return "NE";
  } else if (deg > 90 && deg < 180) {
    return "SE";
  } else if (deg > 180 && deg < 270) {
    return "SW";
  } else return "NW";
};



const Weather = ({
  city,
  description,
  country,
  temp,
  temp_min,
  temp_max,
  speed,
  deg,
  // main
  weatherIcon
}) => {

  return (
    <div className="wrapper">
      <div className="weather_info">
        <h2 className="city_name">
          {city}, <span>{country}</span>
        </h2>
        <h4 className="weather_overview">{description}</h4>
      </div>
      <div className="weather_icon">
        <img src={weatherIcon} alt="weather icon" />
      </div>
      <div className="weather_details">
        <div className="temperature">
          <span
            className="iconify"
            data-icon="bi:thermometer-half"
            data-inline="false"
          ></span>
          <p>
            <span className="min">{temp_min}&#176; /</span>
            <span className="avg">{temp}&#176;</span>
            <span className="max">/ {temp_max}&#176;</span>
          </p>
        </div>
        <div className="wind">
          <span
            className="iconify"
            data-icon="bx:bx-wind"
            data-inline="false"
          ></span>
          <p>{speed} mph, </p>
          <p>{windDirection(deg)} direction</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
