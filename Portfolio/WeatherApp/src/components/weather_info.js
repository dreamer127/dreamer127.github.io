import React, { Component } from 'react';

class WeatherInfo extends Component{
  render(){
    return(
      <div >
        {this.props.city &&
          <div className="weather-info">
            <p className="weather__key">Местопложение:<span className="weather__value"> {this.props.city} , {this.props.country}</span> </p>
            <p className="weather__key">Температура:<span className="weather__value"> {this.props.temp}</span> </p>
            <p className="weather__key">Восход солнца:<span className="weather__value"> {this.props.sunrise}</span></p>
            <p className="weather__key">Заход солнца:<span className="weather__value"> {this.props.sunset}</span></p>
          </div>
        }
        {this.props.error  && <p className="weather__error">Ошибка: {this.props.error} </p>}
      </div>
    );
  }
}

export default WeatherInfo;