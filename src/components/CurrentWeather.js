import React, {useContext} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {appId, baseUrl} from '../weatherAPI';
import moment from 'moment';
import iconLink from '../iconPack';

export default class CurrentWeather extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: ''
    }
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(location){
    const urlCurrentData = `${baseUrl}weather?q=${ location || 'Hanoi'}&appid=${appId}`;
    
    fetch(urlCurrentData)
    .then(res => {
      return res.json();
    })
    .then(data => {      
      this.setState({
        data,
      })
    })
    .catch(err => console.log(err));
  }

  componentWillReceiveProps(nextProps){
    if(this.props.location != nextProps.location){
      this.fetchData(nextProps.location);
    }
  }

  componentDidMount(){
    this.fetchData(this.props.location)
  }

  render(){
    const { data }  = this.state;    
    if(!data){
      return <></>;
    }
    else {
      const location = data.name;
      const { icon, description } = data.weather[0];    
      const { temp, feels_like, pressure, humidity } = data.main;
      const wind = data.wind;
      const updateTime = data.dt;
      const { sunrise, sunset, country } = data.sys;
      
      return (
        <div className="current-weather">
          <div className="location"><h1>{ `${location}, ${country}` }</h1></div>
          <div className="icon-temperature">
            <div className="icon">              
              <FontAwesomeIcon icon={iconLink[icon]}/>
            </div>
            <div className="temperature">
              {`${(temp - 273.15).toFixed()}`}
              &#8451;
            </div>
          </div>
          <div className="description">
            {
              description.charAt().toUpperCase() + description.slice(1)
            }
          </div>        
          <ul className="group">
            <li className="feel-like">{`Feel-like: ${(feels_like - 273.15).toFixed(1)}`}&#8451;</li>
            <li className="pressure">{`Pressure: ${pressure} hPa`}</li>
            <li className="humidity">{`Humidity: ${humidity}%`}</li>
          </ul>
          <ul className="group">
            <li className="wind">
              {`Wind-speed: ${wind.speed}`}
            </li>
            <li className="sunrise">{`Sunrise: ${moment.unix(sunrise).format('HH:mm:ss')}`}</li>
            <li className="sunset">{`Sunset: ${moment.unix(sunset).format('HH:mm:ss')}`}</li>
          </ul>
          <div className="last-update">
            {`Updated: ${moment.unix(updateTime).format('HH:mm:ss')}`}
          </div>
        </div>
      );
    } 
  }
}
