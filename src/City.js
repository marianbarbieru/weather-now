import React, { Component } from 'react';
import './css/City.css';
import './index.css';

export default class City extends Component {
	constructor(props) {
		super(props);

		this.removeCity = this.removeCity.bind(this);
	}
	removeCity() {
		this.props.remove(this.props.id);
	}
	render() {
		let imgSc;
		this.props.icon < 10
			? (imgSc = `https://developer.accuweather.com/sites/default/files/0${this.props.icon}-s.png`)
			: (imgSc = `https://developer.accuweather.com/sites/default/files/${this.props.icon}-s.png`);

		return (
			<div className='city'>
				<h2 className='city-title'>{this.props.city}</h2>
				<div className='main-weather'>
					<div className='city-wheather-img'>
						<img src={imgSc} alt='weather' />
					</div>
					<div className='city-info-temp'>
						<h4 className='description'>{this.props.text}</h4>
						<h3 className='temperature'>
							<span>
								<i className='fas fa-temperature-low'></i>
							</span>{' '}
							{this.props.temperature}&#176; C
						</h3>
						<p>Feels like: {this.props.feels}&#176; C</p>
					</div>
				</div>
				<div className='city-info'>
					<div className='city-location'>
						<div className='city-country'>Country: {this.props.country}</div>
						<div className='city-region'>Region: {this.props.region}</div>
						<div className='geo'>
							Lat: {this.props.lat}&#176; Long: {this.props.long}&#176;{' '}
							<i className='fas fa-map-marker-alt'></i>
						</div>
						<div className='city-time'>Local time: {this.props.date}</div>
					</div>
					<div></div>
				</div>
				<div className='city-wheather'>
					<div className='container'>
						<div>
							Cloud cover: {this.props.cloudCover}%{' '}
							<i className='fas fa-cloud'></i>
						</div>
						<div>Air pressure: {this.props.pressure} mb</div>
						<div>
							UV index: {this.props.UV} - {this.props.UVText}
						</div>
					</div>
					<div className='container'>
						<div>
							Humidity: {this.props.humidity} %{' '}
							<span>
								<i className='fas fa-tint'></i>
							</span>
						</div>
						<div>
							Wind: {this.props.windSpeed} km/h,{' '}
							<span>
								<i className='far fa-compass'></i>
							</span>{' '}
							{this.props.windDirection}
						</div>
						<div>
							Visibility: {this.props.visibility} km{' '}
							<i className='fas fa-binoculars'></i>
						</div>
					</div>
				</div>
				<button className='city-btn' onClick={this.removeCity}>
					Delete City Info <i className='far fa-trash-alt'></i>
				</button>
			</div>
		);
	}
}
