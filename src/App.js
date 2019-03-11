import React, { Component } from 'react';
import { Header } from './Header/Header';
import { WeatherDisplay } from './Weather/WeatherDisplay';
import './App.css';
import {WeatherService} from './Service/WeatherService';
const weatherService = new WeatherService();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    weatherService.getWeather('50129').then(data => this.setState({data}));
  }

  render() {
    return (
      <div className="App">
        <Header title='React Weather Monitor'/>
        <WeatherDisplay data={this.state.data}/>
      </div>
    );
  }
}

export default App;
