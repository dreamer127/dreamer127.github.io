import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Info from './components/info';
import Form from './components/form';
import WeatherInfo from './components/weather_info';

const API_KEY = "82b797b6ebc625032318e16f1b42c016";

class App extends Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) =>{
    e.preventDefault();
    const City = e.target.elements.city.value;
    try {
      
      if(City){
        const ApiUrl = await 
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}&units=metric`);
        let date = await ApiUrl.json();
        
        this.time = (data) =>{
          let d = new Date();
          d.setTime(data*1000);
          return (`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
        };
         
        this.setState({
          temp:date.main.temp,
          city: date.name,
          country: date.sys.country,
          sunrise: this.time(date.sys.sunrise),
          sunset: this.time(date.sys.sunset),
          error: undefined
        });
      }else{
        this.setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          sunrise: undefined,
          sunset: undefined,
          error: "Введите название города"
        });
      }
    } catch (error) {
      console.log(error);
      alert('Error: Такого города нет');
    }
    
  };
  
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
               <Info/>
              </div>
              <div className="col-xs-7 form-container">
                <Form weatherMethod={this.gettingWeather}/>
                <WeatherInfo
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  sunrise={this.state.sunrise}
                  sunset={this.state.sunset}
                  error={this.state.error}
                />
              </div>
            </div>
            </div>
          </div>
          </div>
      </div>
    );
  }
}

export default App;
