import React, {Component} from 'react';
import {baseUrl, appId} from '../weatherAPI';
import moment from 'moment';
import iconLink from '../iconPack';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class DailyForecast extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: ''
    }

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(location){
    const urlForecastData = `${baseUrl}forecast?q=${ location || 'Hanoi'}&appid=${appId}`;
      
    fetch(urlForecastData)
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

  componentDidMount(){
    this.fetchData(this.props.location);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.location != nextProps.location){
      this.fetchData(nextProps.location);
    }
  }

  render(){
    const {data} = this.state;

    if(!data){
      return <div></div>;
    }
    else return (
      <div className="forecast-section">
        <div className="forecast-title">Daily Forecast</div>
        <ul className="daily-forecast">
          {
          data.list.filter((e, index) => [6,14,22,30,38].includes(index)).map( (dataDay, index) => {
            return(
              <li key={`day-${index}`} className="day-forecast">
                <div className="day-date">{moment.unix(dataDay.dt).format('dddd DD')}</div>
                <div className="icon">                   
                  <FontAwesomeIcon icon={iconLink[dataDay.weather[0].icon]} />                             
                </div>
                <div className="temperature">{`Temp: ${(dataDay.main.temp - 273.5).toFixed(1)}`}&#8451;</div>
                <div className="description">{dataDay.weather[0].description.charAt().toUpperCase() + dataDay.weather[0].description.slice(1)}</div>            
              </li>                        
            );
          })
          }
        </ul>
      </div>
    );    
  }
}