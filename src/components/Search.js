import React, { useEffect, useState } from "react";
import "./Search.css";


// image urls for weather icons
const weatherIcon = {
  clear: 'clear.png',
  clouds: 'cloudy.png',
  rain: 'rain.png',
  sunny: 'sunny.png',
  mist: 'mist.png',
  fog: 'fog.png',
  drizzle: 'drizzle.png',
  snow: 'snow.png',
  thunderstorm: 'storm.png'
};

// call api by voice input
function Voice({ setSearch, setQuery, getWeather }) {

  return (
    <button className="voice_btn" type="button" onClick={() => {
      if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        // speech recognition API supported
        console.log('speech recognition supported')

        const guideMessage = 'what city would you like to know the weather'
        const speechGuide = (message) => {
          const speech = new SpeechSynthesisUtterance()
          speech.text = message
          speech.volume = .7
          speech.rate = 1
          speech.pitch = 1

          window.speechSynthesis.speak(speech)
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();


        recognition.onstart = () => {
          console.log('voice activated, you can use microphone')
          // speechGuide(guideMessae)
        }

        recognition.onresult = (e) => {
          const transcript = e.results[0][0].transcript

          console.log(transcript)
          // setting states and init the getweather function using the transcript as query
          setQuery(transcript)
          getWeather(transcript)
          setSearch('')
        }

        speechGuide(guideMessage)
        setTimeout(() => {
          recognition.start()
        }, 2900)

      } else {
        // speech recognition API not supported
        console.log('speec recognition not supported')

        const guideMessage = 'speech recognition not supported by browser'
        const speechGuide = (message) => {
          const speech = new SpeechSynthesisUtterance()
          speech.text = message
          speech.volume = .7
          speech.rate = 1
          speech.pitch = 1

          window.speechSynthesis.speak(speech)
        }

        speechGuide(guideMessage)
      }
    }}>
      <span className="iconify" data-icon="ion:mic-circle-outline" data-inline="false" style={{ color: '#333' }}></span>
    </button>
  )
}

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

  async function getWeather(cityName, lat, long) {
    let api_query = ``
    if (arguments.length === 1) {
      api_query = `${BASE_URL}q=${cityName}&appid=${APP_ID}&units=metric`
    } else {
      api_query = `${BASE_URL}lat=${lat}&lon=${long}&appid=${APP_ID}&units=metric`
    }
    const res = await fetch(api_query);
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
    getWeather(query);
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

  // accessing users location using geolocation and setting its longitude and latitiude as queries to the api 
  const success = (position) => {
    console.log(position)
    let { latitude, longitude } = position.coords
    getWeather(null, latitude, longitude)
  }

  const error = () => {
    alert('Failed to get Geolocation')
  }

  const geolocation = () => {
    navigator.geolocation.getCurrentPosition(success, error)
  }

  useEffect(geolocation, [])

  return (
    <>
      <form className="search_bar" onSubmit={(e) => updateQuery(e)}>
        <input
          type="text"
          placeholder="City..."
          value={search}
          name="city"
          autoComplete="off"
          onChange={(e) => updateSearch(e)}
        />
      </form>
      <Voice setQuery={setQuery} setSearch={setSearch} getWeather={getWeather} />
    </>
  );
};

export default Search;
