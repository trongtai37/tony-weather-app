import React from 'react';
import Searchbar from './SearchBar';
import logo from '../assets/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = (props) => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <h1>Tony Weather</h1>
        <img src={logo} alt="Logo"/>
      </div>

      <div className="search-bar">
        <Searchbar/>
      </div>

      <div className="social-icons">
        <ul>
          <li><a href="https://facebook.com/tai.nguyentrong.0607" target="_blank" title="List of supported city"><i>
            <FontAwesomeIcon icon='city' size="1x"/>
            </i></a></li>
          <li><a href="https://github.com/trongtai37/tony-weather-app.git" target="_blank" title="Github Project"><i>
            <FontAwesomeIcon icon={['fab', 'github']} size="2x"/>
            </i></a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;