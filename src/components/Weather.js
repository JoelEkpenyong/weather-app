import React from "react";
import "./Weather.css";

const WeatherIcon = {
  Rain: (
    <span
      className="iconify"
      data-icon="carbon:rain-heavy"
      data-inline="false"
    ></span>
  ),
  Clear: (
    <span className="iconify" data-icon="uil:clouds" data-inline="false"></span>
  ),
  Cloudy: (
    <span
      className="iconify"
      data-icon="carbon:mostly-cloudy"
      data-inline="false"
    ></span>
  ),
  Sunny: (
    <span
      className="iconify"
      data-icon="carbon:sunny"
      data-inline="false"
    ></span>
  ),
};

const Weather = () => {
  return (
    <div className="wrapper">
      <div className="weather_info">
        <h2 className="city_name">Cupertino</h2>
        <h4 className="weather_overview">LIGHT RAIN</h4>
      </div>
      <div className="weather_icon">{WeatherIcon.Rain}</div>
      <div className="weather_details">
        <div className="temperature">
          <span
            className="iconify"
            data-icon="bi:thermometer-half"
            data-inline="false"
          ></span>
          <p>
            <span className="min">10&#176; /</span>
            <span className="avg">12&#176;</span>
            <span className="max">/ 14&#176;</span>
          </p>
        </div>
        <div className="wind">
          <span
            className="iconify"
            data-icon="bx:bx-wind"
            data-inline="false"
          ></span>
          <p>4 mph, </p>
          <p>SE direction</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
