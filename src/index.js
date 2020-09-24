import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './WeatherApp';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<WeatherApp />
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
