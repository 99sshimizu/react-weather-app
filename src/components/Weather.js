import React, {Component} from 'react'
import {weatherApi} from '../utils'
import './App.css';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loaded: false
    };
  }

  componentWillMount() {
    this.getWeather('conditions', 'autoip');
  }

  getWeather(feature, q) {
    this.setState({
      error: null,
      loaded: false
    });
    weatherApi(feature, q)
      .then(response => {
        if (response.response.error) {
          this.setState({
            error: 'Unable to get weather. Please try again.'
          })
        } else {
          let current = response.current_observation;
          this.setState({
            temp: current.temperature_string,
            location: current.display_location.full,
            icon_url: current.icon_url,
            time: new Date(current.observation_epoch * 1000).toLocaleString(),
          });
        }
        this.setState({ loaded: true });
      });
  }

  renderError() {
    return (
      <div className="center-block">
        <p className="text-danger">{this.state.error}</p>
      </div>
    )
  }

  renderForm() {
    return(
      <div className="row">
        <div className="col-md-5 offset-md-3">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="zipcode"
              placeholder="Enter zipcode"
              onChange={event => this.setState({zipcode: event.target.value})}/>
          </div>
        </div>
        <div className="col-md-1">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => this.getWeather('conditions', this.state.zipcode)}>
            Submit
          </button>
        </div>
      </div>
    )
  }

  renderWeather() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-block">
              <h4 className="card-title">{this.state.location}</h4>
              <p className="card-text">
                {this.state.time}<br/>
                <img src={this.state.icon_url} alt="weather"/>
              </p>
              <h4>{this.state.temp}&deg;</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    if (this.state.loaded) {
      return (
        <div>
          {this.renderError()}
          {this.renderForm()}
          {this.renderWeather()}
        </div>
      )
    } else {
      return (
        <div className="center-block"><img src={require('../img/loading.gif')} alt="loading"/></div>
      )
    }
  }
}

export default Weather;