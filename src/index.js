import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import { AppProvider } from './context/AppContext'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCity, faSun, faCloudSun, faSearch, faMoon, faCloudMoon, faCloud, faCloudMeatball, faCloudShowersHeavy, faCloudSunRain, faCloudMoonRain, faPooStorm, faSnowflake, faSmog } from '@fortawesome/free-solid-svg-icons'

import App from './components/App'
 
library.add(fab, faCity, faSun, faCloudSun, faSearch, faMoon, faCloudMoon, faCloud, faCloudMeatball, faCloudShowersHeavy, faCloudSunRain, faCloudMoonRain, faPooStorm, faSnowflake, faSmog)

ReactDOM.render(<AppProvider>
  <App />
</AppProvider>, document.getElementById('app'))